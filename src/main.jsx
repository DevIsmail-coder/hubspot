import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './global/store.js'
import Context from './global/context.jsx'
import { Toaster } from 'react-hot-toast'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

let persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <Context>
        <App />
        <Toaster />
      </Context>
    </Provider>
    </PersistGate>
  </StrictMode>,
)
