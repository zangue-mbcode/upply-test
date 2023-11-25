
-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "parentId" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);


-- ALTER TABLE IF EXISTS public.Post OWNER to postgres;

-- GRANT ALL ON TABLE public.Post TO postgres;

-- GRANT ALL ON TABLE public.Post TO service_role;