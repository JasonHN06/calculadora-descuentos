export const getDiscountRate = (subtotal: number): number => {
    if (subtotal >= 1000 && subtotal <= 4999.99) return 0.1;
    if (subtotal >= 5000 && subtotal <= 8999.99) return 0.2;
    if (subtotal >= 9000 && subtotal <= 12999.99) return 0.3;
    return 0;
}