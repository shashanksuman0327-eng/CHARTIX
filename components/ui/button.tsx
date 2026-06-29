import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) { return <button className={cn('focus-ring rounded-2xl bg-railway-blue px-5 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-500 disabled:opacity-50', className)} {...props} />; }
