import { TodoCard } from './TodoCard'
import { Alert, AlertDescription } from './ui/alert'
import { AlertCircle, Loader2 } from 'lucide-react'

export function TodoList({ todos, loading, error, onToggle, onDelete }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Failed to load todos. Please check your connection and try again.
        </AlertDescription>
      </Alert>
    )
  }

  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-sm">
          No todos yet. Add one above to get started!
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
