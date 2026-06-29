'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';import { Card } from '@/components/ui/card';import { Input } from '@/components/ui/input';
import { fetchChart } from '@/services/api';import { useChartStore } from '@/store/useChartStore';
const schema = z.object({ trainNumber: z.string().regex(/^\d{5}$/,'Enter a valid 5 digit train number'), date: z.string().min(1), source: z.string().min(2), destination: z.string().min(2) });
type FormValues = z.infer<typeof schema>;
export function SearchPanel() { const setChart = useChartStore((s)=>s.setChart); const { register, handleSubmit, formState:{errors} } = useForm<FormValues>({ resolver:zodResolver(schema), defaultValues:{ trainNumber:'12952', date:new Date().toISOString().slice(0,10), source:'NDLS', destination:'BCT' } }); const mutation = useMutation({ mutationFn: fetchChart, onSuccess: setChart }); return <Card className="mx-auto max-w-5xl"><form onSubmit={handleSubmit((v)=>mutation.mutate(v))} className="grid gap-4 md:grid-cols-5"><label className="md:col-span-1"><span className="text-xs text-slate-300">Train Number</span><Input {...register('trainNumber')} inputMode="numeric" aria-invalid={!!errors.trainNumber}/>{errors.trainNumber&&<small className="text-red-300">{errors.trainNumber.message}</small>}</label><label><span className="text-xs text-slate-300">Journey Date</span><Input type="date" {...register('date')}/></label><label><span className="text-xs text-slate-300">Source</span><Input list="stations" {...register('source')}/></label><label><span className="text-xs text-slate-300">Destination</span><Input list="stations" {...register('destination')}/></label><Button disabled={mutation.isPending} className="self-end"><Search className="mr-2 inline" size={18}/>{mutation.isPending?'Searching':'Search Chart'}</Button><datalist id="stations"><option value="NDLS"/><option value="BCT"/><option value="KOTA"/><option value="BRC"/></datalist></form></Card>; }
