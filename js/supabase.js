import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://nqqbtjthryxlwfylfcvd.supabase.co'      
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xcWJ0anRocnl4bHdmeWxmY3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MTEzMDMsImV4cCI6MjA4NzA4NzMwM30.hLnfmqKXxMKp7U7ojTCjpGUMyKIVdgk88h7A8LOq_b8'      

export const supabase = createClient(supabaseUrl, supabaseKey)
