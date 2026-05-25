import { post as bestAreasToLiveInIndore } from './best-areas-to-live-in-indore';
import { post as bestTiffinServicesInIndore } from './best-tiffin-services-in-indore';
import { post as bestPgsInVijayNagarIndore } from './best-pgs-in-vijay-nagar-indore';
import { post as buyAndSellUsedFurnitureInIndore } from './buy-and-sell-used-furniture-in-indore';
import { post as bestAreasNearTcsIndore } from './best-areas-near-tcs-indore';
import { post as bestAreasNearIBusRouteIndore } from './best-areas-near-ibus-route-indore';
import { post as commonRentalScamsInIndore } from './common-rental-scams-in-indore';
import { costOfLivingInIndore } from './cost-of-living-in-indore';
import { post as howToFindBrokerFreePgsInIndore } from './how-to-find-broker-free-pgs-in-indore';
import { post as howToFindFlatmatesInIndore } from './how-to-find-flatmates-in-indore';
import { post as howToFindMaidsInIndore } from './how-to-find-maids-in-indore';
import { post as howToFindRoommatesSafely } from './how-to-find-roommates-safely';
import { post as howMuchDoMaidsChargeInIndore } from './how-much-do-maids-charge-in-indore';
import { post as livingInBhawarkuanIndore } from './living-in-bhawarkuan-indore';
import { post as livingInPalasiaIndore } from './living-in-palasia-indore';
import { post as livingInSuperCorridorIndore } from './living-in-super-corridor-indore';
import { post as movingToIndoreChecklist } from './moving-to-indore-checklist';
import { post as monthlyBudgetForStudentsInIndore } from './monthly-budget-for-students-in-indore';
import { post as pgVsFlatInIndore } from './pg-vs-flat-in-indore';
import { post as safeAreasForGirlsInIndore } from './safe-areas-for-girls-in-indore';
import { post as studentHousingGuideIndore } from './student-housing-guide-indore';
import { BlogPost } from './types';

export const allBlogPosts: BlogPost[] = [
  livingInPalasiaIndore,
  livingInBhawarkuanIndore,
  livingInSuperCorridorIndore,
  bestAreasNearIBusRouteIndore,
  bestAreasToLiveInIndore,
  bestTiffinServicesInIndore,
  bestPgsInVijayNagarIndore,
  buyAndSellUsedFurnitureInIndore,
  bestAreasNearTcsIndore,
  commonRentalScamsInIndore,
  costOfLivingInIndore,
  howToFindBrokerFreePgsInIndore,
  howToFindFlatmatesInIndore,
  howToFindMaidsInIndore,
  howToFindRoommatesSafely,
  howMuchDoMaidsChargeInIndore,
  movingToIndoreChecklist,
  monthlyBudgetForStudentsInIndore,
  pgVsFlatInIndore,
  safeAreasForGirlsInIndore,
  studentHousingGuideIndore,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return allBlogPosts;
}
