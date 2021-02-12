import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { Context } from '@/index'
import { observer } from 'mobx-react-lite'

const Navigation = () => {

  const {user} = useContext(Context)

  if (user.isAuth) {
    return (
      <div className="loggedInUser">
        <NavLink
          className="header-link loggedInUser-link"
          to={'/profile'} 
          exact={true} 
          activeClassName="active">
          Здравствуйте, {user.user.name}
        </NavLink>
      </div>
    )
  } else {
    return (
      <div>
        <NavLink
          className="header-link"
          to={'/login'} 
          exact={true} 
          activeClassName="active">
          Войти
        </NavLink>
        <NavLink
          className="header-link"
          to={'/register'} 
          exact={true} 
          activeClassName="active">
          Зарегистрироваться
        </NavLink>
      </div>
    )
  }
}

export default observer(Navigation)