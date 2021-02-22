import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from '../Reducers'


const persistConfig = {
    key: 'root',
    storage,
}

// Setting persistance between everything
const persistedReducer = persistReducer(persistConfig, rootReducer)

// We create the store here to be able to import it anywhere and user store.dispatch without using connect()
// For example if we need to dispatch an action without being connected to the store, this is an easier way
// You can all import the store and use store.getState() if you need to access it
const store = createStore(persistedReducer,
    // This is used for Redux DevTool in Chrome Debbuger
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const persistor = persistStore(store)

export {
    store,
    persistor
}