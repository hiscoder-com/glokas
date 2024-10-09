CREATE TABLE IF NOT EXISTS "public"."users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "username" text UNIQUE NOT NULL,
    "is_admin" BOOLEAN DEFAULT false NOT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "blocked_at" TIMESTAMP DEFAULT NULL,
    CONSTRAINT "users_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "fk_auth_users" FOREIGN KEY ("id")
        REFERENCES "auth"."users" ("id")
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

ALTER TABLE "public"."users" ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.users (id, email, username)
  values (new.id, new.email, new.raw_user_meta_data ->> 'username');
  return new;
end;
$$;

CREATE OR REPLACE TRIGGER "on_auth_user_created"
AFTER INSERT ON "auth"."users"
FOR EACH ROW
EXECUTE FUNCTION "public"."handle_new_user"();

CREATE OR REPLACE FUNCTION public.authorized()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    access INT;
BEGIN
    SELECT COUNT(id) INTO access
    FROM public.users
    WHERE users.id = auth.uid() AND users.is_blocked IS NOT TRUE;
    RETURN access > 0;
END;
$$;
