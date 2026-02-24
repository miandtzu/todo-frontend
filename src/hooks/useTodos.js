import { useState, useEffect, useCallback } from 'react'

const API_BASE_URL = 'http://localhost:3000/api/todos'

export function useTodos() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch all todos
  const fetchTodos = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(API_BASE_URL)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      setTodos(data || [])
    } catch (err) {
      setError(err.message)
      console.error('Error fetching todos:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  // Add a new todo
  const addTodo = useCallback(async (title) => {
    try {
      setError(null)
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, completed: false }),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const newTodo = await response.json()
      setTodos(prev => [...prev, newTodo])
      return newTodo
    } catch (err) {
      setError(err.message)
      console.error('Error adding todo:', err)
      throw err
    }
  }, [])

  // Toggle todo completion status
  const toggleTodo = useCallback(async (id) => {
    const todo = todos.find(t => t.id === id)
    if (!todo) return

    try {
      setError(null)
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !todo.completed }),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const updatedTodo = await response.json()
      setTodos(prev =>
        prev.map(t => (t.id === id ? updatedTodo : t))
      )
    } catch (err) {
      setError(err.message)
      console.error('Error toggling todo:', err)
      throw err
    }
  }, [todos])

  // Delete a todo
  const deleteTodo = useCallback(async (id) => {
    try {
      setError(null)
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      setTodos(prev => prev.filter(t => t.id !== id))
    } catch (err) {
      setError(err.message)
      console.error('Error deleting todo:', err)
      throw err
    }
  }, [])

  // Load todos on mount
  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return {
    todos,
    loading,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
    refetch: fetchTodos,
  }
}
