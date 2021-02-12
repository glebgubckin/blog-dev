import React from 'react'
import {Link} from 'react-router-dom'

const Article = props => {

  const article = props.article
  const styles = {borderLeft: `${article.borderColor} 8px solid`}
  
  return (
    <div className="article" style={styles}>
      <Link
          className="article-title"
          to={`/article/${article.id}`}
        >
        <h2>{article.title}</h2>
        </Link>
      <p className="article-text">
        {article.description}
      </p>
      <div className="article-info">
        <Link
          className="readMore"
          to={`/article/${article.id}`}
        >
        Читать далее...
        </Link>
        <p className="article-date">Дата публикации: {new Date(article.upload).toLocaleDateString()}</p>
      </div>
    </div>
  )
}

export default Article