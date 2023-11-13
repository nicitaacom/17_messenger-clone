interface ProcessEnv {
  [key: string]: string | undefined
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {

      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
      SUPABASE_SERVICE_ROLE_KEY: string

      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string


    }
  }
}

/* for metamask detecting */

declare global {
  interface Window {
    ethereum: any
  }
}

export {}
