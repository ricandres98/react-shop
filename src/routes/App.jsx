import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    HashRouter,
} from 'react-router-dom';
import Layout from "@containers/Layout";
import CreateNewPassword from "@components/CreateNewPassword";
import NotFound from "@pages/NotFound";
import Login from "@pages/Login";
import EmailSent from "@components/EmailSent";
import CreateAccount from "@pages/CreateAccount";
import MyAccount from "@components/MyAccount";
import MyOrder from "@containers/MyOrder";
import '@styles/global.css';
import AppContext from '@context/AppContext.js';
import useInitialState from "../hooks/useInitialState";
import MainContainer from "../containers/MainContainer";

const App = () => {
    const initialState = useInitialState()
    return (
      <AppContext.Provider value={initialState}>
        <HashRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<MainContainer />} />
              <Route exact path="/login" element={<Login />} />
              <Route
                exact
                path="/create-password"
                element={<CreateNewPassword />}
              />
              <Route
                exact
                path="/recovery-email"
                element={<EmailSent />}
              />
              <Route 
                exact 
                path='/signup'
                element={<CreateAccount/>}
              />
              <Route 
                exact
                path='/account'  
                element={<MyAccount/>}
                />
              <Route 
                exact
                path='/orders'  
                element={<MyOrder/>}
                />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </HashRouter>
      </AppContext.Provider>
    );
}

export default App;