export interface GitHubRepo {
  id: number
  name: string
  fork: boolean
  description: string | null
  language: string | null
  html_url: string
  homepage: string | null
  expoGifUrl?: string | null
}