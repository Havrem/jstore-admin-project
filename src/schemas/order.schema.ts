import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  price: z.number(),
  image: z.string(),
}).strict();

export type ProductDTO = z.infer<typeof ProductSchema>;

export const AppUserSchema = z.object({
  id: z.number().int(),
  email: z.string().email(),
  name: z.string(),
  address: z.string(),
}).strict();

export type AppUserDTO = z.infer<typeof AppUserSchema>;

export const OrderItemSchema = z.object({
  productDTO: ProductSchema,
  quantity: z.number().int().nonnegative(),
}).strict();

export type OrderItemDTO = z.infer<typeof OrderItemSchema>;

export const OrderSchema = z.object({
  id: z.number().int(),
  appUserDTO: AppUserSchema,
  orderItemDTOS: z.array(OrderItemSchema),
}).strict();

export type OrderDTO = z.infer<typeof OrderSchema>;

/** The /api/order/view response is a List<OrderDTO> */
export const OrdersResponseSchema = z.array(OrderSchema);
export type OrdersResponse = z.infer<typeof OrdersResponseSchema>;