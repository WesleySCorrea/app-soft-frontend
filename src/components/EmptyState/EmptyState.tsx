import type { ReactNode } from 'react'
import './EmptyState.css'

type EmptyStateProps = {
  icone: ReactNode
  titulo: string
  texto: string
}

function EmptyState({ icone, titulo, texto }: EmptyStateProps) {
  return (
    <div className="empty-state">
      {icone}
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  )
}

export default EmptyState
