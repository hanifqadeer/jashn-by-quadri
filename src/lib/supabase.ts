import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

if (!supabaseUrl || supabaseUrl === 'TODO') {
  console.warn('⚠️  NEXT_PUBLIC_SUPABASE_URL is not configured. Set it in .env.local');
}

if (!supabaseAnonKey || supabaseAnonKey === 'TODO') {
  console.warn('⚠️  NEXT_PUBLIC_SUPABASE_ANON_KEY is not configured. Set it in .env.local');
}

// Phase 2: Supabase client — initialized now, used in Phase 2
export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder');

export type { SupabaseClient } from '@supabase/supabase-js';
