const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <form>
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" placeholder="correo@ejemplo.com" />

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="********" />

          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;


