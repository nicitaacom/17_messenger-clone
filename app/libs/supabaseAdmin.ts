import { Database } from "@/app/interfaces/types_db"
import { createClient } from "@supabase/supabase-js"

export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
)

export default supabaseAdmin
