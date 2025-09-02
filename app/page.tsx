import { db } from '@/prisma/db';
import Header from './ui/header';
import TodoList from './ui/todo-list';

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <main>
      <Header />
      <TodoList defaultTodos={todos} />
    </main>
  );
}
