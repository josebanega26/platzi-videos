import React from 'react';
import './Login.scss';
import twitterIcon from '../../assets/images/twitter-icon.png';
import googleIcon from '../../assets/images/google-icon.png';

function Login() {
  return (
    <div>
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form'>
            <input className='input' type='text' placeholder='Correo' />
            <input className='input' type='password' placeholder='Contraseña' />
            <button className='button' type='button'>
              Iniciar sesión
            </button>
            <div className='login__container--remember-me'>
              <label> Recuérdame </label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} alt='google login icon' />
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt='twitter login icon' />
              Inicia sesión con Twitter
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta
            <a href='/'> Regístrate</a>
          </p>
        </section>
      </section>
    </div>
  );
}

export default Login;
