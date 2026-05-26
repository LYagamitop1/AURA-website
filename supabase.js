const SUPABASE_URL = 'https://oxxtfnnohanogvnfzcfg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94eHRmbm5vaGFub2d2bmZ6Y2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3ODM4NDEsImV4cCI6MjA5NTM1OTg0MX0.pWvGJ-1DHY6nYv-1PkXCE9BKKnY4vdO1DBJhXEKdY64';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
