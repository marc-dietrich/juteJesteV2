import { flyerPromo } from '@/data/site-content'

/**
 * Returns true while the temporary flyer promo (section + popup) should be
 * visible. The promo ends automatically at the end of 27 November 2026.
 */
export function isFlyerPromoActive(now: Date = new Date()): boolean {
  return now.getTime() <= new Date(flyerPromo.endsAt).getTime()
}
