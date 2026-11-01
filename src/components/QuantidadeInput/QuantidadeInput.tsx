import { Minus, Plus } from 'lucide-react'
import './QuantidadeInput.css'

type QuantidadeInputProps = {
    valor: number
    max: number
    onChange: (valor: number) => void
}

function QuantidadeInput({ valor, max, onChange }: QuantidadeInputProps) {
    return (
        <div className="quantidade">
            <button onClick={() => onChange(valor - 1)} disabled={valor <= 1}>
                <Minus size={16} />
            </button>
            <span>{valor}</span>
            <button onClick={() => onChange(valor + 1)} disabled={valor >= max}>
                <Plus size={16} />
            </button>
        </div>
    )
}

export default QuantidadeInput
