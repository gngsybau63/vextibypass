export const getSecurityAnalysis = async (context: string): Promise<string> => {
  try {
    const prompt = `
      You are a high-level cybersecurity expert specializing in gaming account security and risk management.
      
      Analyze the following context regarding a user's attempt to modify account security settings (specifically removing an email or bypassing verification).
      
      Context: ${context}
      
      Provide a concise, technical risk assessment (max 150 words). 
      Focus on the implications of session token exposure and email removal. 
      Use technical jargon appropriate for a "Ghost Management Layer" dashboard.
      Format the output as a raw system log analysis.
    `;

    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
      throw new Error('Analysis failed');
    }

    const data = await response.json();
    return data.text || "Analysis complete: No significant anomalies detected in heuristics.";
  } catch (error) {
    console.error("Analysis Failed:", error);
    return "SYSTEM ERROR: AI ANALYSIS MODULE UNREACHABLE. PROCEED WITH CAUTION.";
  }
};
