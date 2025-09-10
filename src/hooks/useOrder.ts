import {fetchOrders as apiFetchOrders } from "api/orderApi"

export const fetchOrders = async () => {
    await apiFetchOrders()
}