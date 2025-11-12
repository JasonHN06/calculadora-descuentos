import type { DiscountResult } from "../types";
const ResultDisplay = ({ result } : { result: DiscountResult}) => {
    return (
        <div className="space-y-2 font-mono">
            <div className="text-md">Subtotal: <span className="font-semibold">L.{result.subtotal.toFixed(2)}</span></div>
            <div className="text-md">Descuento {result.discountRate * 100}%: <span>L.{result.discountAmount.toFixed(2)}</span></div>
            <div className="text-md">Total: <span className="text-green-400 font-semibold">L.{result.total.toFixed(2)}</span></div>
        </div>
    );
}

export default ResultDisplay;