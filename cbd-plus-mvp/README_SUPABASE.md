## Supabase setup (recommended)

1. Create a Supabase project.
2. In Authentication -> Settings enable Email sign-in.
3. Create tables:
   - users (Supabase auth handles basic users)
   - trainers (profile info)
   - courses, sections, lessons, enrollments, certificates
4. Use SUPABASE_SERVICE_KEY for server-side certificate generation.

I will provide SQL schema and migration scripts on request.
