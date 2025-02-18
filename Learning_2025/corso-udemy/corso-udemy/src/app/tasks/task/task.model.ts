/**
 * Interfaccia Task: Le interfaccie sono un modo per definire i tipi di oggetti in TypeScript. 
 */

export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}