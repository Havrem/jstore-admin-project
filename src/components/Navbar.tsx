import styles from "@css/Navbar.module.scss"
import { Link, useNavigate } from "@tanstack/react-router"
import { useEffect, useState } from "react";
import { useAuth } from "contexts/AuthContext";
import { toast } from "react-toastify";

export const Navbar = () => {
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            toast.success("Logged out!")
            navigate({to: "/"})
            
        } catch {
            toast.error("Logout failed.");
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.left}>
            </div>
            <div className={styles.right}>
                {isLoggedIn &&
                    <button className={styles.authBtn} onClick={handleLogout}>Logout</button>
                }
            </div>
        </div>
    )
}