import { makeAutoObservable } from 'mobx'

export default class ArticleStore {
  constructor() {
    this._articles = []
    this._article = {}
    makeAutoObservable(this)
  }

  setArticle(article) {
    this._article = article
  }

  setArticles(articles) {
    this._articles = [...articles]
  }

  get article() {
    return this._article
  }

  get articles() {
    return this._articles
  }
}