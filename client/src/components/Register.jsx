import React, {useContext, useState} from 'react'
import { setTitle } from '@utils/utils'
import { registeration } from '@http/userAPI';
import { Context } from '@/index';
import { useHistory } from 'react-router-dom';
import { ARTICLES_ROUTE } from '@/utils/consts';

const Register = () => {

  const {user} = useContext(Context)
  const history = useHistory()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDouble, setpasswordDouble] = useState("");
  
  const authValidate = () => {
    return email.length > 0 && password.length > 7 && (password === passwordDouble)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let data
      data = await registeration(email, password)
      user.setUser(data)
      user.setIsAuth(true)
      history.push(ARTICLES_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  setTitle('Регистрация')

  return (
    <div className="form-wrapper">
      <form className="form">
        <span className="form-title">Зарегестрироваться</span>
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
        <div className="form-password">
          <label>Повторите пароль:</label>
          <input
            className="form-input"
            type="password" 
            value={passwordDouble} 
            onChange={e => setpasswordDouble(e.target.value)} />
        </div>
        <div className="form-mailing">
          <input
            type="checkbox"
            className="form-checkbox"
            id="mail"
            name="mail"
            value="false" />
          <label for="mail">Я хочу получать уведомления на почту</label>
        </div>
        <button
          type="submit" 
          onClick={handleSubmit}
          className="form-button"
          disabled={!authValidate()}
          >
          Зарегестрироваться
        </button>
      </form>
    </div>
  )
}

export default Register