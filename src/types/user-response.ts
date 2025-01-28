interface IUserResponseData {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

interface IUserResponseSupport {
  url: string
  text: string
}

export interface IUserResponse {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: IUserResponseData[]
  support: IUserResponseSupport
}
