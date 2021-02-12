import React, { useContext, useEffect, useState } from 'react'
import Article from './Article'
import Loader from '@assets/img/Loading.svg'
import { observer } from 'mobx-react-lite'
import { getAll } from '@/http/articleAPI';
import { Context } from '@/index';
import { setTitle } from '@utils/utils';

const Articles = observer(() => {

  const {article} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAll()
      .then(data => article.setArticles(data))
      .finally(() => setLoading(false))
  }, [])

  setTitle('Блог Глеба Губкина')

  if (loading) {
    return <img src={Loader} alt="Loading" />
  } else {
    return (
      <div>
        {article.articles
          ? article.articles.map(article => <Article key={article.id} article={article} />)
          : <img src={Loader} alt="Loader" />
        }
      </div>
    )
  }

})

export default Articles