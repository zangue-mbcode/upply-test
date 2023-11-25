
-- CreateTable
CREATE TABLE "Follow" (
    "id" TEXT NOT NULL,
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);


-- ALTER TABLE IF EXISTS public.Follow OWNER to postgres;

-- GRANT ALL ON TABLE public.Follow TO postgres;

-- GRANT ALL ON TABLE public.Follow TO service_role;