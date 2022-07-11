import { useState } from 'react'
import style from '../styles/Login.module.css'

export default function Login() {

  const [user, setUser] = useState()
  const [pass, setPass] = useState()

  function login(){
    console.log(user)
  }

  return (
    <main className={style.centerContent}>
      <div className={`${style.card} ${style.cardLogin}`}>
        <h2>Login</h2>
        <form className={style.form}>
          <div className={style.control}>
            <input onChange={(e) => setUser(e.target.value)} type="text" placeholder=" " />
            <label className={style.label}>Usuário</label>
          </div>
          <div className={style.control}>
            <input onChange={(e) => setPass(e.target.value)} type="password" placeholder=" " />
            <label className={style.label}>Senha</label>
          </div>
        </form>
        <button onClick={login} className={style.button}>ENTRAR</button>
      </div>
    </main>
  )
}