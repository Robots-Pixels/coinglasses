import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function refactorName(name: string){
  if (name){
      if (name.length > 12){
      return(name.split(" ")[0]);
    }
    return name;
  }
}