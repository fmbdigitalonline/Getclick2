import { AdFormat } from "./adWizard";

export const FACEBOOK_AD_FORMATS: Record<string, AdFormat[]> = {
  "feed": [
    {
      format: "Facebook News Feed Single Image",
      dimensions: { width: 1080, height: 1080 },
      aspectRatio: "1:1 to 1.91:1",
      description: "Best for standard feed posts"
    },
    {
      format: "Facebook News Feed Single Video",
      dimensions: { width: 1080, height: 1080 },
      aspectRatio: "1:1, 4:5 (mobile)",
      description: "Optimized for desktop and mobile"
    },
    {
      format: "Facebook Video Feeds",
      dimensions: { width: 1080, height: 1080 },
      aspectRatio: "4:5",
      description: "Supports ratios from 16:9 to 9:16"
    }
  ],
  "story": [
    {
      format: "Facebook Story",
      dimensions: { width: 1080, height: 1920 },
      aspectRatio: "9:16",
      description: "Full-screen vertical format"
    }
  ]
};

export const GOOGLE_AD_FORMATS: Record<string, AdFormat[]> = {
  "display": [
    {
      format: "Google Display - Horizontal",
      dimensions: { width: 1200, height: 628 },
      aspectRatio: "1.91:1",
      description: "Recommended for banner ads (min: 600 x 314 px)"
    },
    {
      format: "Google Display - Square",
      dimensions: { width: 1200, height: 1200 },
      aspectRatio: "1:1",
      description: "Versatile square format (min: 300 x 300 px)"
    },
    {
      format: "Google Display - Vertical",
      dimensions: { width: 1200, height: 1500 },
      aspectRatio: "4:5",
      description: "Portrait format for mobile (min: 480 x 600 px)"
    }
  ],
  "video": [
    {
      format: "Google Video - Landscape",
      dimensions: { width: 1920, height: 1080 },
      aspectRatio: "16:9",
      description: "Standard YouTube format (10-60 seconds)"
    },
    {
      format: "Google Video - Square",
      dimensions: { width: 1080, height: 1080 },
      aspectRatio: "1:1",
      description: "Perfect for in-feed video ads"
    },
    {
      format: "Google Video - Portrait",
      dimensions: { width: 1080, height: 1920 },
      aspectRatio: "9:16",
      description: "Ideal for YouTube Shorts (6-60 seconds)"
    }
  ],
  "responsive": [
    {
      format: "Google Responsive Display",
      dimensions: { width: 1200, height: 1200 },
      aspectRatio: "1:1",
      description: "Automatically adapts to available ad space"
    }
  ]
};