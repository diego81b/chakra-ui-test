import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { CSSReset, ChakraProvider } from '@chakra-ui/core'
import theme from "./chakra"
import './index.less';
import * as serviceWorker from './serviceWorker';
import Login from './pages/Login';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Login></Login>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
