import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import './Modal.css'

type ModalProps = {
  titulo: string
  onClose: () => void
  children: ReactNode
  footer?: ReactNode
}

function Modal({ titulo, onClose, children, footer }: ModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{titulo}</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">{children}</div>

        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  )
}

export default Modal
