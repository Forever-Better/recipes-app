import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NEXTAUTH_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    SMTP_FROM: z.string().min(1),
    POSTMARK_API_TOKEN: z.string().min(1),
    POSTMARK_ACTIVATION_TEMPLATE: z.string().min(1),
    NEXT_PUBLIC_EDAMAM_API_URL: z.string().min(1),
    NEXT_PUBLIC_EDAMAM_ID: z.string().min(1),
    NEXT_PUBLIC_EDAMAM_KEY: z.string().min(1)
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_EDAMAM_API_URL: z.string().min(1),
    NEXT_PUBLIC_EDAMAM_ID: z.string().min(1),
    NEXT_PUBLIC_EDAMAM_KEY: z.string().min(1)
  },
  runtimeEnv: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    SMTP_FROM: process.env.SMTP_FROM,
    POSTMARK_API_TOKEN: process.env.POSTMARK_API_TOKEN,
    POSTMARK_ACTIVATION_TEMPLATE: process.env.POSTMARK_ACTIVATION_TEMPLATE,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    EDAMAM_API_URL: process.env.NEXT_PUBLIC_EDAMAM_API_URL,
    NEXT_PUBLIC_EDAMAM_API_URL: process.env.NEXT_PUBLIC_EDAMAM_API_URL,
    NEXT_PUBLIC_EDAMAM_ID: process.env.NEXT_PUBLIC_EDAMAM_ID,
    NEXT_PUBLIC_EDAMAM_KEY: process.env.NEXT_PUBLIC_EDAMAM_KEY
  }
});
