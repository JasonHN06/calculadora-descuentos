export type ProductValues = number[];
export interface DiscountResult {
    subtotal: number;
    discountRate: number;
    discountAmount: number;
    total: number;
}