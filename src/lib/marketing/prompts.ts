export function generateMarketingPrompt(
  businessIdea: any,
  targetAudience: any,
  audienceAnalysis: any
) {
  return `Analyze this business and audience to create compelling marketing angles and hooks:

Business Context:
${businessIdea.description}
Value Proposition: ${businessIdea.valueProposition}

Target Audience:
Name: ${targetAudience.name}
Description: ${targetAudience.description}
Demographics: ${targetAudience.demographics}
Pain Points: ${targetAudience.painPoints.join(', ')}

Deep Audience Analysis:
Market Desire: ${audienceAnalysis.marketDesire}
Awareness Level: ${audienceAnalysis.awarenessLevel}
Sophistication Level: ${audienceAnalysis.sophisticationLevel}
Deep Pain Points: ${audienceAnalysis.deepPainPoints.join(', ')}
Potential Objections: ${audienceAnalysis.potentialObjections.join(', ')}

For each pain point and market desire, create marketing angles that:
1. Match the audience's awareness level
2. Address specific pain points directly
3. Consider market sophistication
4. Align with the value proposition
5. Counter potential objections

For each marketing angle, create hooks that:
1. Grab attention immediately
2. Speak directly to the target audience
3. Focus on benefits and outcomes
4. Use proven copywriting formulas
5. Maintain brand voice and positioning

Return a JSON array with exactly 10 items in this format:
[
  {
    "angle": {
      "type": "string (e.g., Problem Agitation, Unique Mechanism)",
      "focus": "string (specific pain point or desire being addressed)",
      "strategy": "string (how this angle connects with the audience)"
    },
    "hook": {
      "text": "string (the actual hook text)",
      "pattern": "string (the copywriting pattern used)",
      "rationale": "string (why this hook works for this audience)"
    }
  }
]`;
}