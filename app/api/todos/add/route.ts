import { NextResponse } from "next/server";
import { addTodo } from "@/app/lib/todoService";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");

  if (typeof name === "string" && name.trim()) {
    try {
      await addTodo(name.trim());
      return NextResponse.redirect("/"); // Redirige vers la page d'accueil après l'ajout
    } catch (error) {
      // Vérification du type de l'erreur
      let errorMessage = "An unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  }

  return NextResponse.json({ error: "Invalid name" }, { status: 400 });
}
