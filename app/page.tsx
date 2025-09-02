import { db } from "@/prisma/db";
import Button from "./ui/button";
import Header from "./ui/header";
import TodoList from "./ui/todo-list";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <main>
      <Header />
      <Button>Click me</Button>
      <TodoList defaultTodos={todos} />
    </main>
  );
}
