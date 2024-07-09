import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';
// redux
import { store } from './store/store';

import AuthProvider from 'context/auth/auth-provider';
import SocketProvider from 'context/socket/socket-provider';
import { AuthConsumer } from 'context/auth/auth-consumer';
import ThemeProvider from 'theme';

import ScrollToTop from 'components/ScrollToTop';

import Router from 'routes/sections';

const App = () => {
    return (
        <ReduxProvider store={store}>
            <AuthProvider>
                <SocketProvider>
                    <HelmetProvider>
                        <ThemeProvider>
                            <AuthConsumer>
                                <BrowserRouter>
                                    <ScrollToTop />
                                    <Router />
                                </BrowserRouter>
                            </AuthConsumer>
                        </ThemeProvider>
                    </HelmetProvider>
                </SocketProvider>
            </AuthProvider>
        </ReduxProvider>
    );
};

export default App;
