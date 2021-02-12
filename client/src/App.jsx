import React, { useContext, useEffect } from 'react'
import {BrowserRouter} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Navigation from '@components/Navigation'
import Sidebar from '@components/Sidebar'
import Navbar from '@components/admin/Navbar'
import AppRouter from '@/components/AppRouter';
import { observer } from 'mobx-react-lite'
import { Context } from '@/index';
import { check } from '@/http/userAPI'

const App = () =>  {

  const {user} = useContext(Context)

  useEffect(() => {

    check()
      .then(data => {
        user.setUser(data)
        user.setIsAuth(true)
      })
  }, [])

 
  return (
    <BrowserRouter>
      {user.user.role === 'admin'? <Navbar /> : null}
      <div className="wrapper">
        <header className="header">
        <NavLink to={'/'} exact={true}>
          <h1 className="header-title">Блог Глеба Губкина</h1>
        </NavLink>
          <Navigation />
        </header>
        <div className="container">
          <AppRouter />
          <Sidebar />
          </div>
      </div>
    </BrowserRouter>
  )
}

export default observer(App)