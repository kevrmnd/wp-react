import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

function renderApp(RootComponent) {
  render(
    <AppContainer>
      <Provider store={store}>
        <RootComponent />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}
renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => {
      const NextApp = require('./App').default
      renderApp(NextApp)
  })
  module.hot.accept()
}