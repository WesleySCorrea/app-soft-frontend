import { CircleCheck } from 'lucide-react'
import './SucessoModal.css'

type SucessoModalProps = {
    titulo: string
    mensagem: string
    onClose: () => void
}

function SucessoModal({ titulo, mensagem, onClose }: SucessoModalProps) {
    return (
        <div className="sucesso-overlay" onClick={onClose}>
            <div className="sucesso-modal" onClick={(e) => e.stopPropagation()}>
                <CircleCheck size={56} className="sucesso-icone" />
                <h2>{titulo}</h2>
                <p>{mensagem}</p>
                <button className="btn-primary" onClick={onClose}>OK</button>
            </div>
        </div>
    )
}

export default SucessoModal
