export const GENERATION_CREDITS = {
  audience: 1,
  audience_analysis: 2,
  campaign: 3,
  hooks: 2,
  images: 5,
} as const;

export type GenerationType = keyof typeof GENERATION_CREDITS;