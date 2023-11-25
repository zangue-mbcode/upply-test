
-- CreateTable
CREATE TABLE "Like" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);


-- ALTER TABLE IF EXISTS public.Like OWNER to postgres;

-- GRANT ALL ON TABLE public.Like TO postgres;

-- GRANT ALL ON TABLE public.Like TO service_role;