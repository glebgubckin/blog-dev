import React, { useState } from 'react'
import { setTitle } from '@utils/utils'
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { create } from '@http/articleAPI';
import { ADMIN_ROUTE } from '@utils/consts';

const ArticleNew = () => {

  const styles = {cursor: 'auto'}
  const history = useHistory()

  const [articleTitle, setArticleTitle] = useState("")
  const [articleText, setArticleText] = useState("")
  const [articleBorderColor, setArticleBorderColor] = useState("")
  const [articleAccess, setArticleAccess] = useState("all")

  const handleSubmit = e => {
    e.preventDefault()
    create(articleTitle, articleText, articleBorderColor, articleAccess)
      .then(() => history.push(ADMIN_ROUTE))
      .catch(e => alert(e.message))
  }

  setTitle('Новая статья')

  return (
    <div className="article-update">
      <h2 style={styles}>Новая статья</h2>
      <form className="form-wrapper-two" onSubmit={handleSubmit}>
        <div>
          <label>Заголовок статьи:</label>
          <input
            onChange={e => setArticleTitle(e.target.value)}
            className="form-article-input"
            type="text" 
            value={articleTitle}/>
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
        <button onClick={handleSubmit}>Добавить статью</button>
      </form>
    </div>
  )
}

export default observer(ArticleNew)