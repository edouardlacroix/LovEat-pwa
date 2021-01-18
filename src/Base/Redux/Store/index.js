import { createStore } from 'redux'
import rootReducer from '../Reducers'

// We create the store here to be able to import it anywhere and user store.dispatch without using connect()
// For example if we need to dispatch an action without being connected to the store, this is an easier way
// You can all import the store and use store.getState() if you need to access it
const store = createStore(rootReducer,
    // This is used for Redux DevTool in Chrome Debbuger
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store