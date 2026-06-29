import axios from 'axios';
import { railwayProvider } from './mockRailwayProvider';
export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL ?? '/api', withCredentials: true });
export async function fetchChart(params: { trainNumber: string; date: string; source: string; destination: string }) { if (process.env.NEXT_PUBLIC_USE_REMOTE_API === 'true') { const { data } = await api.get('/charts/search', { params }); return data; } return railwayProvider.searchChart(params); }
