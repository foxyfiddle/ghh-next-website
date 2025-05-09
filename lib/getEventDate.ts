// lib/getUsername.ts
import { supabase } from './supabaseClient'

export const getEventDate = async (): Promise<Date | null> => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  const { data, error } = await supabase
  .from('events')
  .select('event_start_date')
  .gte('event_start_date', today)
  .order('event_start_date', { ascending: true }) // soonest first
  .limit(1); // only one result

  if (error) {
    console.error('Error fetching event_date:', error.message)
    return null
  }

  return data?.[0]?.event_start_date ?? null
}