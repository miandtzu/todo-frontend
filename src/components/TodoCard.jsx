import { Card, CardContent } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'

export function TodoCard({ todo, onToggle, onDelete }) {
  return (
    <Card className={`transition-all hover:shadow-md ${todo.completed ? 'bg-muted/50' : ''}`}>
      <CardContent className="flex items-center gap-4 p-4">
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label={`Mark "${todo.title}" as ${todo.completed ? 'incomplete' : 'complete'}`}
        />
        
        <div className="flex-1 min-w-0">
          <p
            className={`text-sm font-medium transition-colors ${
              todo.completed
                ? 'text-muted-foreground line-through'
                : 'text-foreground'
            }`}
          >
            {todo.title}
          </p>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(todo.id)}
          aria-label={`Delete "${todo.title}"`}
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
