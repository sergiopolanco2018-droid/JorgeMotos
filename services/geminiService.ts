import { GoogleGenAI, GenerativeModel } from "@google/genai";

let model: GenerativeModel | null = null;

const getModel = () => {
  if (model) return model;
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not defined in the environment");
  }

  const genAI = new GoogleGenAI(apiKey);
  model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: `Eres "JorgeBot", el asistente virtual experto de la tienda "JorgeMotos". 
      Tu tono es amigable, profesional y apasionado por el ciclismo.
      
      Tus funciones son:
      1. Ayudar a los clientes a elegir bicicletas y repuestos basándote en su uso (urbano, montaña, ruta).
      2. Explicar especificaciones técnicas de forma sencilla.
      3. Informar sobre políticas de la tienda: Envíos a todo el país en 48hs, garantía de 1 año en cuadros, devoluciones en 30 días.
      4. Si preguntan por horarios: Lunes a Viernes 9am - 7pm, Sábados 10am - 2pm.
      
      No inventes precios. Si te preguntan por un producto específico que no conoces, sugiéreles que busquen en la sección de "Tienda" o contacten a soporte.
      Responde siempre en español.`,
  });
  return model;
};

export const sendChatMessage = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const currentModel = getModel();
    const chat = currentModel.startChat({
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      })),
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text() || "";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error && error.message.includes("GEMINI_API_KEY")) {
      return "El chat no está configurado. Por favor, configura la clave de API de Gemini.";
    }
    return "Lo siento, estoy teniendo problemas técnicos en este momento. Por favor intenta más tarde.";
  }
};
