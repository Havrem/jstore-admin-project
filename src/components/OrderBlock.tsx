import { useEffect, useState } from "react"
import styles from "@css/OrderBlock.module.scss"

import { fetchOrders as apiFetchOrders } from "api/orderApi"
import type { OrderDTO } from "@schemas/order.schema"
import { OrderCard } from "./OrderCard"

export const OrderBlock = () => {
  const [orders, setOrders] = useState<OrderDTO[]>([])

  useEffect(() => {
    apiFetchOrders().then(setOrders)
  }, [])

  return (
    <div className={styles.mainContainer}>
        <h1>Manage Orders</h1>
        {orders.map((o) => (
        <OrderCard key={o.id} {...o} />
        ))}
    </div>
  )
}
