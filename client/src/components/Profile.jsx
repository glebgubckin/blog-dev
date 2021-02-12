import React, { useContext, useState } from 'react'
import { setTitle } from '@utils/utils'
import { Context } from '@/index';
import { update, logout } from '@http/userAPI';
import { useHistory } from 'react-router-dom';
import { ARTICLES_ROUTE } from '@/utils/consts';

const Profile = () => {

  const {user} = useContext(Context)
  const history = useHistory()

  const [name, changeName] = useState(user.user.name)
  const [surname, changeSurname] = useState(user.user.surname)
  const [email, changeEmail] = useState(user.user.email)
  const [password, changePassword] = useState("")
  const [passwordDouble, changePasswordDouble] = useState("")
  const [checkbox, setCheckbox] = useState(false);

  const changeValidate = () => {
    return (checkbox 
      && (email.length > 0 || name.length > 0 || (password.length > 7 
      && password === passwordDouble)
    ))
  }

  const handleSubmit = e => {
    e.preventDefault()
    update(user.user.id, name, surname, email, password)
      .then(data => user.setUser(data))
    history.push(ARTICLES_ROUTE)
  }

  const handleLogout = e => {
    e.preventDefault()
    logout()
      .then(data => {
        user.setUser(data)
        user.setIsAuth(false)
      })
      history.push(ARTICLES_ROUTE)
  }

  setTitle(`${user.user.surname} ${user.user.name}`)

    return (
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <span className="form-title">Настройки профиля</span>
          <div className="form-block">
            <label>Изменить имя:</label>
            <input
              className="form-input"
              type="text" 
              value={name} 
              onChange={e => changeName(e.target.value)} />
          </div>
          <div className="form-block">
            <label>Изменить фамилию:</label>
            <input
              className="form-input"
              type="text" 
              value={surname} 
              onChange={e => changeSurname(e.target.value)} />
          </div>
          <div className="form-block">
            <label>Изменить e-mail:</label>
            <input
              className="form-input"
              type="email" 
              value={email} 
              onChange={e => changeEmail(e.target.value)} />
          </div>
          <div className="form-password">
            <label>Изменить пароль:</label>
            <input
              className="form-input"
              type="password" 
              value={password} 
              onChange={e => changePassword(e.target.value)} />
          </div>
          <div className="form-password">
            <label>Потвердите пароль:</label>
            <input
              className="form-input"
              type="password" 
              value={passwordDouble} 
              onChange={e => changePasswordDouble(e.target.value)} />
          </div>
          <div className="form-confirm">
            <input
              type="checkbox"
              className="form-checkbox"
              id="confim"
              name="confim"
              checked={checkbox} 
              onChange={() => setCheckbox(!checkbox)}
            />
            <label for="confim">Потвердить изменения</label>
          </div>
          <button 
            type="submit" 
            className="form-button"
            disabled={!changeValidate()}
            onClick={handleSubmit}>
            Изменить
          </button>
        </form>
        <span 
          onClick={handleLogout}
          className="logout">
          Выйти
        </span>
      </div>
    )
}

export default Profile