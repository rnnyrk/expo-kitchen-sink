import { createClient } from '@supabase/supabase-js';

import { Env } from './env';
import { SecureStoreAdapter } from './secureStore';

export const supabaseUrl = Env.SUPABASE_URL;
const supabaseAnonKey = Env.SUPABASE_PUBLIC_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: SecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
