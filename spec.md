# Mandi Digital Marketplace

## Current State
The Featured Livestock section in Landing.tsx uses a CSS grid (4 columns) with `rounded-2xl` cards. MOCK_ANIMALS has only 4 items. No horizontal slider or spread animation exists.

## Requested Changes (Diff)

### Add
- Expand MOCK_ANIMALS to 20 items with varied animal data
- FeaturedLivestockSlider component with:
  - Intro spread animation: cards begin centered/stacked, then fan out to positions on section scroll-into-view
  - Horizontal drag/swipe/arrow slider showing ~4 cards at a time; rest revealed on left/right scroll
  - Sharp corners (border-radius: 0) on all cards
  - Wider, portrait-rectangular cards (taller than wide)
  - Arrow navigation buttons
  - Drag support for desktop, swipe for mobile

### Modify
- Replace current grid-based featured listings block in Landing.tsx with the new FeaturedLivestockSlider

### Remove
- Old 4-column grid layout for featured livestock cards

## Implementation Plan
1. Expand MOCK_ANIMALS to 20 entries in Landing.tsx
2. Build FeaturedLivestockSlider using useRef + IntersectionObserver for scroll-trigger
3. Intro animation: all visible cards start at translateX(0) center, then animate to spread positions using CSS transitions with staggered delays
4. After intro, render a horizontally scrollable track; left/right arrows advance by one card; dragging works too
5. Card style: sharp corners, ~200px wide x ~300px tall, white bg, shadow
6. Replace the existing featured section with the new component
