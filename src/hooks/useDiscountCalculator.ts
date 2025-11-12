import { useState, useEffect } from "react";
import type { ProductValues, DiscountResult } from "../types";
import { getDiscountRate } from "../utils/getDiscountRate";

export const useDiscountCalculator = (values: ProductValues): DiscountResult =>{
    const [result, setResult] = useState<DiscountResult>({
        subtotal: 0,
        discountRate: 0,
        discountAmount: 0,
        total: 0,
    });

    useEffect(() =>{
        const subtotal = values.reduce((acc, val) => acc + val, 0);
        const discountRate = getDiscountRate(subtotal);
        const discountAmount = subtotal * discountRate;
        const total = subtotal - discountAmount;
        setResult({ subtotal, discountRate, discountAmount, total });
    }, [values])

    return result;
}