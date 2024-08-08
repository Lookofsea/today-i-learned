import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kgnqkxksxjcwlxxpgeov.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbnFreGtzeGpjd2x4eHBnZW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwODQ2MjksImV4cCI6MjAzODY2MDYyOX0.IGDbfs6gnmZa_7abIdBfQ0hlvU0mXK6OZQEh7h_OLbU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
