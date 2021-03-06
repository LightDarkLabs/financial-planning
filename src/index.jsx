/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './Root'
import './theme/stylesheets/app.scss'

const root = document.getElementById('root')

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./Root', () => { render(Root) })
}
