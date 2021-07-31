import { createClient } from '@supabase/supabase-js'

/*@todo find out how to place credentials in env file (issues with typescript) */
const supabaseUrl = 'https://egpmvzwzpyionhzwhmry.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzcxNjE0OSwiZXhwIjoxOTQzMjkyMTQ5fQ.7VqMdt7iaAj8TbT_wf-wkyb5PqIoxtR7wmkUMPmUyaE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
