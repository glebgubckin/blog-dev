import React, {useContext, useEffect, useState} from 'react'
import {setTitle} from '@/utils/utils'
import { Context } from '@/index';
import { getOne } from '@/http/articleAPI';
import { observer } from 'mobx-react-lite';
import { update, destroy } from '@http/articleAPI';
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTE } from '@utils/consts';

const ArticleUpdate = () => {

  const id = window.location.pathname.slice(15, window.location.pathname.length)
  const styles = {cursor: 'auto'}
  const {article} = useContext(Context)
  const history = useHistory()

  const [articleTitle, setArticleTitle] = useState('')
  const [articleText, setArticleText] = useState('')
  const [articleBorderColor, setArticleBorderColor] = useState("")
  const [articleAccess, setArticleAccess] = useState("all")

  useEffect(() => {
    getOne(id)
      .then(data => article.setArticle(data))
      .finally(() => {
        setArticleTitle(article.article.title)
        setArticleText(article.article.description)
        setArticleBorderColor(article.article.borderColor)
        setArticleAccess(article.article.access)
      })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    update(id, articleTitle, articleText, articleBorderColor, articleAccess)
    history.push(ADMIN_ROUTE)
  }

  const handleDelete = e => {
    e.preventDefault()
    let ok = window.confirm(`Вы точно хотите удалить статью: ${article.article.title}`)
    if (ok) {
      destroy(id)
        .then(data => article.setArticles(data))
      history.push(ADMIN_ROUTE)
    }
  }

  setTitle(article.article.title)

  return (
    <div className="article-update">
      <h2 style={styles}>{article.article.title}</h2>
      <form className="form-wrapper-two" onSubmit={handleSubmit}>
        <div>
          <label>Заголовок статьи:</label>
          <input
            onChange={e => setArticleTitle(e.target.value)}
            className="form-article-input"
            type="text"
            value={articleTitle}
            />
        </div>
        <div>
          <label>Текст статьи:</label>
          <textarea
            onChange={e => setArticleText(e.target.value)}
            className="form-textarea"
            type="text" 
            value={articleText}/>
        </div>
        <div>
          <label>Цвет грацицы:</label>
          <input
            onChange={e => setArticleBorderColor(e.target.value)}
            value={articleBorderColor}
            type="color"/>
        </div>
        <div>
          <label>Доступ:</label>
          <div>
            <label>Все</label>
            <input
              onChange={e => setArticleAccess('all')}
              checked={articleAccess === 'all'}
              type="radio"/>
          </div>
          <div>
            <label>Премиум</label>
            <input
              onChange={e => setArticleAccess('premium')}
              checked={articleAccess === 'premium'}
              type="radio"/>
          </div>
        </div>
        <button onClick={handleSubmit}>Сохранить изменения</button>
      </form>
      <br />
      <p className="form-delete-article" onClick={handleDelete}>Удалить статью</p>
    </div>
  )
}

export default observer(ArticleUpdate)