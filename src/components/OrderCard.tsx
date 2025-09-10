import type { OrderDTO } from "@schemas/order.schema"

export const OrderCard = (order: OrderDTO) => {
  return (
    <div>
      <div>
        <p>Order id: {order.id}</p>
        <p>Email: {order.appUserDTO.email}</p>
        <p>Username: {order.appUserDTO.name}</p>
      </div>

      <div>
        {order.orderItemDTOS.map((item, idx) => (
          <div key={idx}>
            <p>Product name: {item.productDTO.title}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  )
}