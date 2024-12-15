// Marketing angle types based on audience sophistication and awareness
export const MARKETING_ANGLE_TYPES = {
  PROBLEM_AWARE: [
    "Problem Agitation",
    "Problem Solution Bridge",
    "Hidden Problem Revelation",
    "Cost of Inaction",
    "Future Pacing"
  ],
  SOLUTION_AWARE: [
    "Unique Mechanism",
    "New Discovery",
    "Competitive Edge",
    "Better Way",
    "Simplified Solution"
  ],
  PRODUCT_AWARE: [
    "Social Proof",
    "Risk Reversal",
    "Results Comparison",
    "Value Stacking",
    "Insider Access"
  ],
  MOST_AWARE: [
    "Scarcity",
    "Urgency",
    "Premium Positioning",
    "Exclusive Offer",
    "Direct Call to Action"
  ]
} as const;

// Marketing angle templates for different awareness levels
export const ANGLE_TEMPLATES = {
  PROBLEM_AGITATION: {
    description: "Emphasize the pain points and their consequences",
    template: "Highlight how [pain point] is causing [negative consequence]"
  },
  UNIQUE_MECHANISM: {
    description: "Focus on the unique way your solution works",
    template: "Reveal the [unique aspect] that makes [solution] different"
  },
  SOCIAL_PROOF: {
    description: "Leverage success stories and testimonials",
    template: "Show how [customer type] achieved [specific result]"
  },
  SCARCITY: {
    description: "Create urgency through limited availability",
    template: "Emphasize limited [resource/time/spots] for [benefit]"
  }
} as const;

export function determineAwarenessLevel(audienceAnalysis: any) {
  const { sophisticationLevel, awarenessLevel } = audienceAnalysis;
  
  if (sophisticationLevel.toLowerCase().includes('high') || 
      awarenessLevel.toLowerCase().includes('high')) {
    return 'MOST_AWARE';
  }
  
  if (sophisticationLevel.toLowerCase().includes('medium')) {
    return 'PRODUCT_AWARE';
  }
  
  if (awarenessLevel.toLowerCase().includes('medium')) {
    return 'SOLUTION_AWARE';
  }
  
  return 'PROBLEM_AWARE';
}

export function generateMarketingAngles(audienceAnalysis: any) {
  const awarenessLevel = determineAwarenessLevel(audienceAnalysis);
  const relevantAngles = MARKETING_ANGLE_TYPES[awarenessLevel];
  
  return relevantAngles.map(angle => ({
    type: angle,
    description: ANGLE_TEMPLATES[angle]?.description || `Use ${angle} approach`,
    template: ANGLE_TEMPLATES[angle]?.template || `Apply ${angle} strategy`
  }));
}