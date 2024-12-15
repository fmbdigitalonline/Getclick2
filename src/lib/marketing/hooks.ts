export const HOOK_PATTERNS = {
  QUESTION: {
    pattern: "Ask a thought-provoking question about [pain_point]",
    example: "What if [pain_point] wasn't a problem anymore?"
  },
  STATISTIC: {
    pattern: "Share a surprising statistic about [problem/solution]",
    example: "Did you know that [statistic] of [audience] struggle with [problem]?"
  },
  STORY: {
    pattern: "Start with a relatable story about [pain_point]",
    example: "Like many [audience], I used to [pain_point]..."
  },
  CONTRAST: {
    pattern: "Create contrast between before and after",
    example: "Stop [pain_point]. Start [benefit]."
  },
  REVELATION: {
    pattern: "Reveal an unexpected truth about [problem/solution]",
    example: "The real reason [audience] can't [desired outcome]..."
  }
};

export function generateHookFromAngle(
  angle: string,
  painPoint: string,
  audience: string,
  benefit: string
) {
  const variables = {
    pain_point: painPoint,
    audience,
    benefit,
    problem: painPoint,
    desired_outcome: benefit
  };

  const pattern = HOOK_PATTERNS[angle]?.pattern || HOOK_PATTERNS.QUESTION.pattern;
  
  return replaceVariables(pattern, variables);
}

function replaceVariables(template: string, variables: Record<string, string>) {
  return Object.entries(variables).reduce((text, [key, value]) => {
    return text.replace(new RegExp(`\\[${key}\\]`, 'g'), value);
  }, template);
}