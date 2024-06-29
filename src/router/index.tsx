import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../features/core/Root';
import { AuthPage } from '../pages/auth/Auth';
import { CreateArticlePage } from '../pages/create/CreateArticlePage';
import { ArticlePage } from '../pages/article/ArticlePage';
import { FreshPage } from '../pages/fresh/FreshPage';
import { PopularPage } from '../pages/popular/PopularPage';
import { Maps } from 'pages/map/Map';
import { Sights } from 'pages/sights/Sights';
import { Seasons } from 'pages/seasons/Seasons';
import { Faq } from 'pages/faq/Faq';
import { Gallery } from 'pages/gallery/Gallery';
import { Main } from 'pages/main/Main';
import { ROUTES } from './routes';
import { Routes } from 'pages/rotes/Routes';
import { Donate } from 'pages/donate/Donate';
// import { Climate } from 'pages/climate/Climate';
// import { Nature } from 'pages/nature/Nature';

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: ROUTES.SIGHTS,
        index: true,
        element: <Sights />,
      },
      {
        path: ROUTES.SEASONS,
        index: true,
        element: <Seasons />,
      },
      {
        path: ROUTES.ROUTES,
        index: true,
        element: <Routes />,
      },
      {
        path: ROUTES.MAP,
        index: true,
        element: <Maps />,
      },

      {
        path: ROUTES.FAQ,
        index: true,
        element: <Faq />,
      },
      {
        path: ROUTES.DONATE,
        index: true,
        element: <Donate />,
      },
      {
        path: ROUTES.GALLERY,
        index: true,
        element: <Gallery />,
      },
      {
        path: ROUTES.POPULAR,
        element: <PopularPage />,
      },
      {
        path: ROUTES.FRESH,
        element: <FreshPage />,
      },
      {
        path: `${ROUTES.ARTICLE}/:id`,
        element: <ArticlePage />,
      },
      {
        path: ROUTES.AUTH,
        element: <AuthPage />,
      },
      {
        path: ROUTES.CREATE_ARTICLE,
        element: <CreateArticlePage />,
      },
      // {
      //   path: ROUTES.NATURE,
      //   index: true,
      //   element: <Nature />,
      // },
      // {
      //   path: ROUTES.CLIMATE,
      //   index: true,
      //   element: <Climate />,
      // },
    ],
  },
]);
