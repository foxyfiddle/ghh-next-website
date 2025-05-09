// lib/getUsername.ts
import { supabase } from "./supabaseClient";

export const getEventMonth = async (): Promise<{
  eventStartMonth: number | null;
  eventEndMonth: number | null;
}> => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const { data, error } = await supabase
    .from("events")
    .select("event_start_date, event_end_date")
    .gte("event_start_date", today)
    .order("event_start_date", { ascending: true }) // soonest first
    .limit(1); // only one result

  if (error) {
    console.error("Error fetching event_date:", error.message);
    return { eventStartMonth: null, eventEndMonth: null };
  }

  const eventStartMonth = new Date(data?.[0]?.event_start_date).getMonth() + 1; // Months are 0-indexed in JavaScript
  const eventEndMonth = new Date(data?.[0]?.event_end_date).getMonth() + 1;

  return {
    eventStartMonth,
    eventEndMonth,
  };
};
