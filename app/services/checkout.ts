export type CheckoutLine = {
  productSlug: string;
  quantity: number;
  size?: string;
  color?: string;
  designId?: string;
};

export type CheckoutSession = {
  status: "ready";
  lines: CheckoutLine[];
  integration: "stripe-placeholder";
};

export function createCheckoutSession(lines: CheckoutLine[]): CheckoutSession {
  return { status: "ready", lines, integration: "stripe-placeholder" };
}
