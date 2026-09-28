const SUPABASE_URL = "https://jlgudbktobxzdwbwgnkj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_8sgkZH2-S_HNzkmVmf7s3Q_KiOys6IX";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);