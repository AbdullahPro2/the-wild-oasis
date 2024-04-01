import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uavptuorjmncdynshyyj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhdnB0dW9yam1uY2R5bnNoeXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxODM0OTEsImV4cCI6MjAyNTc1OTQ5MX0.J9PZCriumDTfxGkpqazzdAALisEeU7f2tV6GWj8ifR0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
