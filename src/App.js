import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { store, persistor } from './store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Routes />
                    <GlobalStyle />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
