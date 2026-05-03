import { useState } from "react";
import { signUSer } from "./services/Auth";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";
function SignUpForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { name, password };
    await signUSer(data);
    nav("/login"); // Redirect to home page after successful login
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <span className={styles.card__title}>signup</span>
        <form className={styles.card__form} onSubmit={handleSubmit}>
          <input
            placeholder="Your username"
            type="text"
            required=""
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            placeholder="Your password"
            type="password"
            required=""
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className={styles["sign-in"]}>Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
