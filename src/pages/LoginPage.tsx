import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/LoginPage.module.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Simulate successful login, you can replace this with your actual login logic
      setIsSuccessModalOpen(true);
    }
  };

  return (
    <div>
      <div className={styles["login-box"]}>
        <h2>Custom Form 1</h2>
        <form className="myForm" onSubmit={handleSubmit}>
          <div className={styles["user-box"]}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <label>Email</label>
            {errors.email && (
              <span className={styles["error"]}>{errors.email}</span>
            )}
          </div>
          <div className={styles["user-box"]}>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
            />
            <label>Password</label>
            {errors.password && (
              <span className={styles["error"]}>{errors.password}</span>
            )}
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
      {isSuccessModalOpen && (
        <div className={styles["modal"]}>
          <div className={styles["modal-content"]}>
            <p>
              Login Successful!
              <span
                className={styles["close"]}
                onClick={() => setIsSuccessModalOpen(false)}
              >
                &times;
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
