import React, { useContext } from 'react'
import { ARTICLES_ROUTE } from '@/utils/consts'
import { Redirect, Route, Switch } from 'react-router-dom'
import { authRoutes, publicRoutes } from '@/utils/routes';
import { Context } from '@/index';
import { observer } from 'mobx-react-lite';

const AppRouter = () => {
  
  const {user} = useContext(Context) 

  return (
    <Switch>
      {user.isAuth && authRoutes.map(({path, Component}) => {
        return <Route key={path} exact path={path} component={Component} />
      })}
      {publicRoutes.map(({path, Component}) => {
        return <Route key={path} exact path={path} component={Component} />
      })}
      {setTimeout(() => <Redirect from="*" to={ARTICLES_ROUTE} />, 100)}
    </Switch>
  )
}

export default observer(AppRouter)