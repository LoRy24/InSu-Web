import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// noinspection JSUnusedGlobalSymbols
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
