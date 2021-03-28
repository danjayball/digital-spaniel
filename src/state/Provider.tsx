import React from 'react';
import { WrapRootElementBrowserArgs } from 'gatsby';
import { Provider as ReduxProvider } from 'react-redux';
import { initialiseStore } from '.';

function Provider({ element }: WrapRootElementBrowserArgs) {
  const store = initialiseStore();

  return <ReduxProvider store={store}>{element}</ReduxProvider>;
}

export default Provider;
