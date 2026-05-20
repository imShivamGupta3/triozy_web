import { post as bestAreasToLiveInIndore } from './best-areas-to-live-in-indore';
import { post as bestTiffinServicesInIndore } from './best-tiffin-services-in-indore';
import { post as buyAndSellUsedFurnitureInIndore } from './buy-and-sell-used-furniture-in-indore';
import { post as commonRentalScamsInIndore } from './common-rental-scams-in-indore';
import { costOfLivingInIndore } from './cost-of-living-in-indore';
import { post as howToFindBrokerFreePgsInIndore } from './how-to-find-broker-free-pgs-in-indore';
import { post as howToFindFlatmatesInIndore } from './how-to-find-flatmates-in-indore';
import { post as howToFindMaidsInIndore } from './how-to-find-maids-in-indore';
import { post as safeAreasForGirlsInIndore } from './safe-areas-for-girls-in-indore';
import { post as studentHousingGuideIndore } from './student-housing-guide-indore';
import { BlogPost } from './types';

export const allBlogPosts: BlogPost[] = [
  bestAreasToLiveInIndore,
  bestTiffinServicesInIndore,
  buyAndSellUsedFurnitureInIndore,
  commonRentalScamsInIndore,
  costOfLivingInIndore,
  howToFindBrokerFreePgsInIndore,
  howToFindFlatmatesInIndore,
  howToFindMaidsInIndore,
  safeAreasForGirlsInIndore,
  studentHousingGuideIndore,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return allBlogPosts;
}
