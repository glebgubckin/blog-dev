import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Loader from '@assets/img/Loading.svg'
import '@styles/admin/articles.css'
import { setTitle } from '@utils/utils'
import { observer } from 'mobx-react-lite'
import { Context } from '@/index';
import { getAll } from '@http/articleAPI';

const AdminArticles = observer(() => {

  const {article} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAll()
      .then(data => article.setArticles(data))
      .finally(() => setLoading(false))
  }, [])

  setTitle('Статьи')

  if (loading) {
    return <img src={Loader} alt="Loading" />
  } else {
    return (
      <div>
        {article.articles.map(article => {
          return (
            <div className="admin-article">
              <p>{article.title}</p>
              <NavLink
                key={article.id}
                className="admin-article-link"
                to={`/admin/article/${article.id}`}>
              🖊️
              </NavLink>
            </div>
          )
          })}
        <div className="admin-article">
          <p>Добавить новую статью</p>
          <NavLink
            key={article.id}
            className="admin-article-link"
            to={`/admin/new_article/${article.id}`}>
          ➕
          </NavLink>
        </div>
      </div>
    )
  }
})

export default AdminArticles