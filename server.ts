import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { MercadoPagoConfig, Preference } from 'mercadopago';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mercado Pago Configuration
  // Note: Never expose access token to client
  const mpAccessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  
  const client = mpAccessToken ? new MercadoPagoConfig({ 
    accessToken: mpAccessToken,
    options: { timeout: 5000 }
  }) : null;

  // API Route: Create Preference
  app.post("/api/create-preference", async (req, res) => {
    if (!client) {
      return res.status(500).json({ error: "Mercado Pago is not configured. MERCADOPAGO_ACCESS_TOKEN is missing." });
    }

    const { items, payerEmail } = req.body;

    try {
      const preference = new Preference(client);
      const result = await preference.create({
        body: {
          items: items.map((item: any) => ({
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            unit_price: item.price,
            currency_id: 'ARS' // or user preferred currency
          })),
          payer: {
            email: payerEmail
          },
          back_urls: {
            success: `${req.protocol}://${req.get('host')}/success`,
            failure: `${req.protocol}://${req.get('host')}/cart`,
            pending: `${req.protocol}://${req.get('host')}/pending`
          },
          auto_return: 'approved',
        }
      });

      res.json({ id: result.id, init_point: result.init_point });
    } catch (error) {
      console.error("Mercado Pago Preference Error:", error);
      res.status(500).json({ error: "Failed to create payment preference" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
