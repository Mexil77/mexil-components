import { Ticket } from "."

export interface Category {
  active: boolean
  name: string
  total: number
  spend: number
  rest: number
  color: string
  childs: Category[]
  tickets: Ticket[]
}