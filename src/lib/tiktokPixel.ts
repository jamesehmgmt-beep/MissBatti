/**
 * TikTok Pixel Event Helper
 * Provides typed helper functions for all TikTok Pixel events.
 * The base pixel code (ttq.load + ttq.page) is in index.html.
 *
 * The TikTok SDK attaches methods (track, identify, page, etc.) onto
 * window.ttq via setAndDefer, so we can call them directly.
 */

// ─── Safe accessor ────────────────────────────────────────────────────────
// Returns the global ttq instance, or undefined if not yet loaded.
function getTtq(): any {
  return (window as any).ttq;
}

// ─── Identify (PII postback) ──────────────────────────────────────────────
export function ttqIdentify(params: {
  email?: string;       // SHA-256 hashed
  phone_number?: string; // SHA-256 hashed
  external_id?: string;  // SHA-256 hashed
}) {
  getTtq()?.identify(params);
}

// ─── Page View (call on SPA route changes) ────────────────────────────────
export function ttqPageView() {
  getTtq()?.page();
}

// ─── Content / Product Payload ────────────────────────────────────────────
interface TtqContent {
  content_id: string;
  content_type: 'product' | 'product_group';
  content_name: string;
}

interface TtqContentParams {
  contents: TtqContent[];
  value: number;
  currency: string;
  [key: string]: unknown; // allow extra keys like search_string
}

// ─── Event Functions ──────────────────────────────────────────────────────

/** Fires when a user views a product */
export function ttqViewContent(params: TtqContentParams) {
  getTtq()?.track('ViewContent', params);
}

/** Fires when a user adds a product to their wishlist */
export function ttqAddToWishlist(params: TtqContentParams) {
  getTtq()?.track('AddToWishlist', params);
}

/** Fires when a user performs a search */
export function ttqSearch(params: TtqContentParams & { search_string: string }) {
  getTtq()?.track('Search', params);
}

/** Fires when a user adds payment info */
export function ttqAddPaymentInfo(params: TtqContentParams) {
  getTtq()?.track('AddPaymentInfo', params);
}

/** Fires when a user adds a product to their cart */
export function ttqAddToCart(params: TtqContentParams) {
  getTtq()?.track('AddToCart', params);
}

/** Fires when a user initiates checkout */
export function ttqInitiateCheckout(params: TtqContentParams) {
  getTtq()?.track('InitiateCheckout', params);
}

/** Fires when a user places an order */
export function ttqPlaceAnOrder(params: TtqContentParams) {
  getTtq()?.track('PlaceAnOrder', params);
}

/** Fires when a user completes registration */
export function ttqCompleteRegistration(params?: Partial<TtqContentParams>) {
  getTtq()?.track('CompleteRegistration', params || {});
}

/** Fires when a user completes a purchase */
export function ttqPurchase(params: TtqContentParams) {
  getTtq()?.track('Purchase', params);
}
