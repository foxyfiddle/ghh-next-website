// lib/getUsername.ts
import { supabase } from './supabaseClient'

export const getEventState = async (): Promise<string | null> => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  const { data, error } = await supabase
  .from('events')
  .select('event_state')
  .gte('event_date', today)
  .order('event_date', { ascending: true }) // soonest first
  .limit(1); // only one result

  if (error) {
    console.error('Error fetching state:', error.message)
    return null
  }

  return data?.[0]?.event_state ?? null
}
