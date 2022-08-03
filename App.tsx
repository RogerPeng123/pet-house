/**
 * 根组建处理
 *
 * @author songyang peng
 */
import * as React from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import { default as theme } from './src/assets/color/custom-theme.json';

import Navigation from './src/components/Navigation';

const App: React.FC = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Navigation />
    </ApplicationProvider>
  )
}

export default App

