import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function occupancyTone(value: number) { if (value < 55) return 'text-railway-green bg-green-500/15'; if (value < 75) return 'text-yellow-300 bg-yellow-400/15'; if (value < 90) return 'text-railway-orange bg-orange-400/15'; return 'text-red-300 bg-red-500/15'; }
