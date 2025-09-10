import { api } from "./api"
import type { OrderDTO } from "@schemas/order.schema"

export const fetchOrders = async (): Promise<OrderDTO[]> => {
  const res = await api.get<OrderDTO[]>("/api/order/view")
  return res.data
}
