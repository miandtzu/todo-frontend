import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export function TodoForm({ onAdd, disabled }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim() && !disabled) {
      onAdd(value.trim())
      setValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        placeholder="Add a new todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        className="flex-1"
        aria-label="New todo title"
      />
      <Button
        type="submit"
        disabled={disabled || !value.trim()}
        size="icon"
        aria-label="Add todo"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </form>
  )
}
