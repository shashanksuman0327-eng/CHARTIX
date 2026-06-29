import { create } from 'zustand';
import type { TrainChart } from '@/types/railway';
interface ChartState { chart?: TrainChart; selectedCoach?: string; setChart: (chart: TrainChart) => void; selectCoach: (coach: string) => void; }
export const useChartStore = create<ChartState>((set) => ({ setChart: (chart) => set({ chart, selectedCoach: chart.coaches[0]?.id }), selectCoach: (selectedCoach) => set({ selectedCoach }) }));
