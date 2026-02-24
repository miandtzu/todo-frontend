import { useTodos } from "./hooks/useTodos";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { CheckSquare2 } from "lucide-react";

function App() {
  const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos();

  const handleAddTodo = async (title) => {
    try {
      await addTodo(title);
    } catch (err) {
      console.error("Failed to add todo:", err);
    }
  };

  const handleToggleTodo = async (id) => {
    try {
      await toggleTodo(id);
    } catch (err) {
      console.error("Failed to toggle todo:", err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
    } catch (err) {
      console.error("Failed to delete todo:", err);
    }
  };

  console.log("todos", todos);

  const completedCount = todos?.filter((t) => t.completed).length ?? 0;
  const totalCount = todos?.length ?? 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <CheckSquare2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">Todo App</CardTitle>
            <CardDescription>
              Track your tasks efficiently
              {totalCount > 0 && ` • ${completedCount}/${totalCount} completed`}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <TodoForm onAdd={handleAddTodo} disabled={loading} />

            {error && (
              <div className="text-sm text-destructive text-center">
                Last action failed. Please try again.
              </div>
            )}

            <TodoList
              todos={todos}
              loading={loading}
              error={error}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          </CardContent>
        </Card>

        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <p>Built with React, Vite & ShadCN UI</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
