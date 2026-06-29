export type SeatStatus = 'occupied' | 'vacant' | 'blocked';
export type CoachClass = 'AC' | 'Sleeper' | 'General' | 'Chair Car' | 'Executive';
export interface StationStop { code: string; name: string; arrival: string; departure: string; distance: number; boarding: number; deboarding: number; onboard: number; platform: string; occupancy: number; }
export interface Seat { number: string; status: SeatStatus; gender?: 'M' | 'F' | 'O'; age?: number; boarding?: string; destination?: string; berth: 'LB'|'MB'|'UB'|'SL'|'SU'|'WS'|'AS'; }
export interface Coach { id: string; label: string; class: CoachClass; capacity: number; occupied: number; seats: Seat[]; }
export interface TrainChart { trainNumber: string; trainName: string; trainType: string; source: string; destination: string; distance: number; departure: string; arrival: string; currentStatus: string; chartPrepared: boolean; occupancy: number; availableBerths: number; totalCoaches: number; totalSeats: number; coaches: Coach[]; route: StationStop[]; }
