import { MercadoPagoConfig, Preference } from 'mercadopago';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const mpAccessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  
  if (!mpAccessToken) {
    return res.status(500).json({ error: "Mercado Pago is not configured. MERCADOPAGO_ACCESS_TOKEN is missing." });
  }

  const client = new MercadoPagoConfig({ 
    accessToken: mpAccessToken,
    options: { timeout: 5000 }
  });

  const { items, payerEmail } = req.body;

  try {
    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: items.map((item: any) => ({
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          unit_price: Number(item.price),
          currency_id: 'ARS' 
        })),
        payer: {
          email: payerEmail
        },
        back_urls: {
          success: `https://${req.headers.host}/success`,
          failure: `https://${req.headers.host}/failure`,
          pending: `https://${req.headers.host}/pending`
        },
        auto_return: 'approved',
      }
    });

    return res.status(200).json({ id: result.id, init_point: result.init_point });
  } catch (error) {
    console.error("Mercado Pago Preference Error:", error);
    return res.status(500).json({ error: "Failed to create payment preference" });
  }
}
