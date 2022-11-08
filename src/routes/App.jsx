import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Layout from "@containers/Layout";
import CreateNewPassword from "@components/CreateNewPassword";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Login from "@pages/Login";
import EmailSent from "@components/EmailSent";
import CreateAccount from "@pages/CreateAccount";
import MyAccount from "@components/MyAccount";
import MyOrder from "@containers/MyOrder";
import '@styles/global.css';
import Checkout from "@containers/Checkout";
import AppContext from '@context/AppContext.js';
import useInitialState from "../hooks/useInitialState";

const App = () => {
    const initialState = useInitialState()
    return (
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
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
              <Route 
                exact
                path='/test'  
                element={<Checkout/>}
                />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    );
}

export default App;