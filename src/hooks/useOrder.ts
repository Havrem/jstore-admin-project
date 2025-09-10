import { fetchOrders as apiFetchOrders, removeOrder as apiRemoveOrder } from "api/orderApi"
import type { OrderDTO } from "@schemas/order.schema"

export const fetchOrders = async (): Promise<OrderDTO[]> => {
  return await apiFetchOrders()
}

export const removeOrder = async (id: number): Promise<void> => {
  await apiRemoveOrder(id)
}