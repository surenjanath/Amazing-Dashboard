import { GoogleGenAI } from "@google/genai";

export const analyzeDashboardData = async (data: any): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "API Key not found. Please set REACT_APP_GEMINI_API_KEY or allow the demo to run in mock mode.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Switch to gemini-2.0-flash-exp to resolve 404 model not found errors
    const model = "gemini-2.0-flash-exp"; 
    
    const prompt = `
      You are a data analyst. Analyze the following insurance dashboard data JSON and provide 3 key insights in a concise bulleted list.
      Focus on the distribution of policies across Lines of Business (LOB) and any notable patterns in the recent policy entries.
      
      Data: ${JSON.stringify(data)}
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "No insights generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Unable to generate insights at this time. (Check console for details)";
  }
};