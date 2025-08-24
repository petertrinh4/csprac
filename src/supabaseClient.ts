import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fbpqyhbmovgycbjuocny.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZicHF5aGJtb3ZneWNianVvY255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDI0ODQsImV4cCI6MjA3MTU3ODQ4NH0.RDDCZW5SM9JfV70ZpE8lMJd-WcHpF-CCdTB9bS55Ydc';
export const supabase = createClient(supabaseUrl, supabaseKey);
