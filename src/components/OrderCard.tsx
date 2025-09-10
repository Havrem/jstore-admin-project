import type { OrderDTO } from "@schemas/order.schema"
import styles from '@css/OrderCard.module.scss';
import { removeOrder } from "hooks/useOrder";
import { toast } from "react-toastify";

export const OrderCard = (order: OrderDTO) => {
  const handleRemove = async () => {
    try {
      await removeOrder(order.id)
      toast.success("Order removed!")
    } catch (err) {
      toast.error("Order could not be removed.")
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.top}>
        <p>Order id: {order.id}</p>
        <p>Email: {order.appUserDTO.email}</p>
        <p>Username: {order.appUserDTO.name}</p>
        <button className={styles.removeBtn} onClick={handleRemove}>
            Remove
          </button>
      </div>

      <div className={styles.bottom}>
        {order.orderItemDTOS.map((item, idx) => (
          <div key={idx} className={styles.field}>
            <p>Product name: {item.productDTO.title}</p>
            <p className={styles.qty}>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  )
}