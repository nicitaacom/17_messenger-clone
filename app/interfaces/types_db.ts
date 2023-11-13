export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          body: string
          conversation_id: string
          created_at: string
          id: string
          is_closed_conversation: boolean
          sender_id: string
        }
        Insert: {
          body: string
          conversation_id: string
          created_at?: string
          id?: string
          is_closed_conversation?: boolean
          sender_id: string
        }
        Update: {
          body?: string
          conversation_id?: string
          created_at?: string
          id?: string
          is_closed_conversation?: boolean
          sender_id?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          id: string
          img_url: string[]
          on_stock: number
          owner_id: string
          price: number
          price_id: string
          sub_title: string
          title: string
        }
        Insert: {
          id: string
          img_url: string[]
          on_stock: number
          owner_id: string
          price: number
          price_id: string
          sub_title: string
          title: string
        }
        Update: {
          id?: string
          img_url?: string[]
          on_stock?: number
          owner_id?: string
          price?: number
          price_id?: string
          sub_title?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatarurl: string | null
          email: string | null
          id: string
          role: string | null
        }
        Insert: {
          avatarurl?: string | null
          email?: string | null
          id: string
          role?: string | null
        }
        Update: {
          avatarurl?: string | null
          email?: string | null
          id?: string
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users_cart: {
        Row: {
          cart_products: Json
          created_at: string
          id: string
        }
        Insert: {
          cart_products?: Json
          created_at?: string
          id: string
        }
        Update: {
          cart_products?: Json
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_cart_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_user: {
        Args: {
          p_id: string
          p_email: string
          p_avatarurl: string
          p_role: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
