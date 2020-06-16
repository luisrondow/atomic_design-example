import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";

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
