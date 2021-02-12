import { 
  ADMIN_ROUTE, 
  PROFILE_ROUTE, 
  ADMIN_ARTICLE_ROUTE,
  ADMIN_NEW_ARTICLE_ROUTE,
  LOGIN_ROUTE, 
  REGISTRATION_ROUTE, 
  ARTICLES_ROUTE,
  ARTICLE_FULL_ROUTE
} from './consts'
import AdminArticles from '@/components/admin/AdminArticles'
import ArticleUpdate from '@components/admin/ArticleUpdate'
import ArticleNew from '@components/admin/ArticleNew'
import Profile from '@components/Profile'
import Login from '@components/Login'
import Register from '@components/Register'
import ArticleFull from '@components/ArticleFull'
import Articles from '@/components/Articles'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminArticles
  },
  {
    path: ADMIN_ARTICLE_ROUTE,
    Component: ArticleUpdate
  },
  {
    path: ADMIN_NEW_ARTICLE_ROUTE,
    Component: ArticleNew
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile
  }
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Register
  },
  {
    path: ARTICLES_ROUTE,
    Component: Articles
  },
  {
    path: ARTICLE_FULL_ROUTE,
    Component: ArticleFull
  }
]