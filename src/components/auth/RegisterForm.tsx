import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterInput } from "@schemas/auth.schema";
import styles from "@css/Form.module.scss";
import { useAuth } from "contexts/AuthContext";
import { toast } from "react-toastify";

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });

  const { register: registerUser } = useAuth();

  const onSubmit = async (input: RegisterInput) => {
    try {
      await registerUser(input);
      toast.success("Registered!")
    } catch {
      toast.error("Register failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.mainContainer}>
      <label className={styles.field}>
        Email:
        <input {...register("email")} placeholder="Enter a email..." />
      </label>
      {errors.email && <p>{errors.email.message}</p>}

      <label className={styles.field}>
        Password:
        <input type="password" {...register("password")} placeholder="Create a password..." />
      </label>
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit" disabled={isSubmitting} className={styles.confirmBtn}>
        Create account
      </button>
    </form>
  );
};
