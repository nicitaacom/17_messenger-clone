declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      NEXTAUTH_SECRET:string

      GITHUB_ID:string
      GITHUB_SECRET:string

      GOOGLE_CLIENT_ID:string
      GOOGLE_CLIENT_SECRET:string

      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:string

      NEXT_PUBLIC_PUSHER_APP_KEY:string
      PUSHER_APP_ID:string
      PUSHER_SECRET:string
    }
  }
}


export {}
