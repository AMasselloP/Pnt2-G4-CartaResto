//manera de conectarse con supabase
import {createClient} from '@supabase/supabase-js';

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL || 'https://almgluddbxcugmhcmcfk.supabase.co',
    import.meta.env.VITE_SUPABASE_API_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsbWdsdWRkYnhjdWdtaGNtY2ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0OTEyMjMsImV4cCI6MjA3NzA2NzIyM30.KphMvKosWXBZr3IBHBuQ5R25rIbJU0S1rCFtIwLDSi8'
);