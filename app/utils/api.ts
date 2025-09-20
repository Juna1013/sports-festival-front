const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'postgresql://admin:plwbPNN7U40O0GXBtcqNAKCkdFXY4Vi0@dpg-d37a40ogjchc73c3qn0g-a/sportsdb_t8bw' // 後でRenderのURLに置き換え
  : 'http://localhost:3001';

export interface Event {
  id: number;
  name: string;
  schedule_time: string;
  location: string;
}

export interface Tournament {
  id: number;
  round: string;
  team_a: string;
  team_b: string;
  winner: string | null;
}

export interface TournamentData {
  event: {
    id: number;
    name: string;
  };
  tournaments: Tournament[];
}

export async function fetchEvents(): Promise<Event[]> {
  const response = await fetch(`${API_BASE_URL}/events`);
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  return response.json();
}

export async function fetchTournament(eventId: number): Promise<TournamentData> {
  const response = await fetch(`${API_BASE_URL}/tournaments/${eventId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch tournament');
  }
  return response.json();
}
