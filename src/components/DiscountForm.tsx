import { useEffect, useState } from "react";
import { useDiscountCalculator } from "../hooks/useDiscountCalculator";
import ResultDisplay from './ResultDisplay';

const DiscountForm = () =>{
    const [inputs, setInputs] = useState<string[]>(Array(5).fill(''));
    const values = inputs.map(val => parseFloat(val) || 0);
    const result = useDiscountCalculator(values);
    const [showWarnig, setShowWarning] = useState(false);

    useEffect(() =>{
        setShowWarning(result.subtotal > 13000 && result.discountAmount === 0);
    }, [result]);

    const handleChange = (index: number, value: string) =>{
        if(/^\d*\.?\d*$/.test(value)){
            const updated = [...inputs];
            updated[index] = value;
            setInputs(updated);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-4 rounded shadow space-y-4 hover:shadow-lg">
            <h2 className="text-2xl font-bold underline underline-offset-6 text-center text-green-500 hover:invert-25">Calculadora de Descuentos</h2>
            {inputs.map((val, i) =>(
                <input key={i} type="text" inputMode="decimal" 
                value={val} onChange={e => handleChange(i, e.target.value)} 
                placeholder={`Producto ${i + 1}`}
                className="w-full px-3 py-2 border hover:ring hover:ring-green-300 hover:bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-green-500"/>
            ))}
            {showWarnig && (
                <div role="alert" className="p-3 rounded bg-yellow-300 border-l-4 border-amber-500 text-yellow-900 text-sm">
                    El subtotal supera los L.13000 y no se aplica ningun descuento.
                </div>
            )}
            < ResultDisplay result={result} />
        </div>
    );
}

export default DiscountForm;