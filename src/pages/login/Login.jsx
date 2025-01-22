import "../../styles/Login.css"
import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">

    <h2>Entrar com sua conta</h2>
    <form>
        <label for="email">E-mail</label>
        <input className="email" type="email" required />

      <label>Senha</label>
      <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          required          
        />
        <button className="buttonPassword"
          type="button"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
        

      <a href="">Esqueceu a senha?</a>

      <button className="send" type="submit">Enviar</button>
    </form>

    <p>Não tem uma conta?</p>

    <button>Criar conta</button>
    </div>
  );
}


export default Login