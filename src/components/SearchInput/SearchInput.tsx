import { useState } from 'react'
import { Search } from 'lucide-react'
import './SearchInput.css'

type SearchInputProps = {
  onSearch: (termo: string) => void
  placeholder?: string
}

function SearchInput({ onSearch, placeholder }: SearchInputProps) {
  const [texto, setTexto] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSearch(texto.trim())
  }

  return (
    <form className="search-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">
        <Search size={18} />
      </button>
    </form>
  )
}

export default SearchInput
