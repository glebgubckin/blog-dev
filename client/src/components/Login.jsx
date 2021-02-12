import React, { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import {Context} from '@/index'
import { setTitle } from '@utils/utils'
import { login } from '@http/userAPI'
import { observer } from 'mobx-react-lite';
import { ARTICLES_ROUTE } from '@/utils/consts';

const Login = observer(() => {

  const {user} = useContext(Context)
  const history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const authValidate = () => {
    return email.length > 0 && password.length > 7
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let data
      data = await login(email, password)
      user.setUser(data)
      user.setIsAuth(true)
      history.push(ARTICLES_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  setTitle('Войти')

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <span className="form-title">Войти</span>
        <div className="form-email">
          <label>E-mail:</label>
          <input
            className="form-input"
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-password">
          <label>Пароль:</label>
          <input
            className="form-input"
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} />
        </div>
        <button 
          type="submit" 
          className="form-button"
          disabled={!authValidate()}
          onClick={handleSubmit}>
          Войти
        </button>
      </form>
    </div>
  )
})

export default Login