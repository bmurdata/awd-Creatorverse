// Setup SupaBase database backend connection
import {createClient} from '@supabase/supabase-js';
const URL='ProjectURL';
const API_Key='Key';
export const supabase=createClient(URl,API_Key);
