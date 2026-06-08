import { createClient } from '@supabase/supabase-js';

// Deixe exatamente assim
const supabaseUrl = 'https://dpousjyfropauwohmxmw.supabase.co'.trim();

// Cole a chave nova que você acabou de copiar dentro das aspas simples
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwb3Vzanlmcm9wYXV3b2hteG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5NTUzMjIsImV4cCI6MjA5NTUzMTMyMn0.AJEeOtSKdfGi9l4GPnzbka1pda6M9kIBVhUNaL42O9E'.trim(); 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);