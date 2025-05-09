// lib/getUsername.ts
import { supabase } from './supabaseClient'

export const getEventName = async (): Promise<string | null> => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  const { data, error } = await supabase
  .from('events')
  .select('event_name')
  .gte('event_date', today)
  .order('event_date', { ascending: true }) // soonest first
  .limit(1); // only one result

  if (error) {
    console.error('Error fetching event_name:', error.message)
    return null
  }

  return data?.[0]?.event_name ?? null
}