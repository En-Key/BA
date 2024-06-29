import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
// import { LanguageProvider } from './features/context/i18n';
import './global.css';
import { router } from './router';
import { rootStore } from './store';

import { ThemeProvider } from 'features/context/i18n';
import { YMaps } from '@pbe/react-yandex-maps';

export const App = () => {
  return (
    <YMaps>
      <ThemeProvider>
        <Provider store={rootStore}>
          <RouterProvider router={router} />;
        </Provider>
      </ThemeProvider>
    </YMaps>
  );
};


