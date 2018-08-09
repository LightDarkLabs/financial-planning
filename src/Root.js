import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import store from '@stores'
import Routes from '@routes'

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
)

export default Root
