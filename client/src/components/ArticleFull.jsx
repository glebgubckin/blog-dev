import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import Loader from '@assets/img/Loading.svg'
import {setTitle} from '@utils/utils'
import { Context } from '@/index';
import { getOne } from '@http/articleAPI';
const ArticleFull = observer(props => {

  const styles = {cursor: 'auto'}
  const id = window.location.pathname.slice(9, window.location.pathname.length)
  const {article} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getOne(id)
      .then(data => article.setArticle(data))
      .finally(() => setLoading(false))
  }, [])

  setTitle(article.article.title)

  if (loading) {
    return <img src={Loader} alt="Loading" />
  } else {
    return (
      <div>
        <h2 style={styles}>{article.article.title}</h2>
        <p className="article__full-text">{article.article.description}</p>
        <p className="article-date">Дата публикации: {new Date(article.article.upload).toLocaleDateString()}</p>
      </div>
    )
  }
})

export default ArticleFull