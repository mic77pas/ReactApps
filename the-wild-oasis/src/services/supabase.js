import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vuvwxuvjkyzcxsmfftdi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dnd4dXZqa3l6Y3hzbWZmdGRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNzQxNDIsImV4cCI6MjA3MDk1MDE0Mn0.h1QTZZXsyZa1TqYKvSnBzRghTndRKbg5nSED03fKigI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
