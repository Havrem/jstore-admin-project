import { LoginForm } from "./LoginForm";
import { useState } from "react";
import { RegisterForm } from "./RegisterForm";
import styles from '@css/AuthBlock.module.scss'

export const AuthBlock = () => {
    const [mode, setMode] = useState<"login" | "register">("login");

    return (
        <div>
            {mode === 'login' ? (
                <div className={styles.mainContainer}>
                    <h1>Login</h1>
                    <LoginForm/>
                    <button onClick={() => setMode('register')} className={styles.modeBtn}>Don't have an account yet? Register!</button>
                </div>
            ): (
                <div className={styles.mainContainer}>
                    <h1>Register</h1>
                    <RegisterForm/>
                    <button onClick={() =>setMode('login')} className={styles.modeBtn}>Back to login.</button>
                </div>
            )}
        </div>
    )
}