import { GoogleGenerativeAI } from "@google/generative-ai";

export const getSecurityAnalysis = async (context: string): Promise<string> => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GENAI_API_KEY || "");
    
    const prompt = `
      You are a high-level cybersecurity expert specializing in gaming account security and risk management.
      
      Analyze the following context regarding a user's attempt to modify account security settings (specifically removing an email or bypassing verification).
      
      Context: ${context}
      
      Provide a concise, technical risk assessment (max 150 words). 
      Focus on the implications of session token exposure and email removal. 
      Use technical jargon appropriate for a "Ghost Management Layer" dashboard.
      Format the output as a raw system log analysis.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;

    return response.text() || "Analysis complete: No significant anomalies detected in heuristics.";
  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    return "SYSTEM ERROR: AI ANALYSIS MODULE UNREACHABLE. PROCEED WITH CAUTION.";
  }
};
