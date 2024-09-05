// // // lib/todoService.ts

// import { supabase } from '@/app/utils/supabase/server';

// // //todo par user(get)
// export async function getTodosByUserId(userId: string) {
//   const { data, error } = await supabase
//     .from('todos')
//     .select('*')
//     .eq('user_id', userId);

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// }



// // //todo pas faites (get)
// export async function getTodosNotDone() {
//   const { data, error } = await supabase
//     .from('todos')
//     .select('*')
//     .eq('done', false);

//   if (error) {
//     console.error('Error fetching todos:', error)
//     throw new Error(error.message);
//   }

//   return data;
// }

// // //todo faites (get)
// export async function getTodosDone() {
//   const { data, error } = await supabase
//     .from('todos')
//     .select('*')
//     .eq('done', true);

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// }

// // // add todob(create)
// export async function addTodo(name: string) {
//   const { data, error } = await supabase
//     .from('todos')
//     .insert([{ name }]);

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// }

// // //faire une todo (upate)
// export async function doTodo(id: string, updates: {  done: boolean; deadline: string; user_id:string; }) {
//   const { data, error } = await supabase
//     .from('todos')
//     .update(updates)
//     .eq('id', id);

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// }

// // //supprimer une todo
// export async function deleteTodo(id: string) {
//   const { data, error } = await supabase
//     .from('todos')
//     .delete()
//     .eq('id', id);

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// }

// // //supprimer les todos effectués
// export async function deleteExpiredDoneTodo() {
//   const oneWeekAgo = new Date();
//   oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

//   const { data, error } = await supabase
//     .from('todos')
//     .delete()
//     .eq('done', true)
//     .lt('deadline', oneWeekAgo.toISOString())

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// }
