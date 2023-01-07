import React from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/home';
import Card1 from './components/cards';
import Group from './components/group-tour';
import Footer from './components/footer';
import Detail from './components/detail-tour';
import Booknow from './components/booking';
import Profile from './components/profile-history-trip';
import {  Route, Routes } from 'react-router-dom';
import Incoming from './components/admin-incoming-transcation';
import Addtrip from './components/addtrip';
import DetailTripAdmin from './components/detail-trip-admin';
import FormAddtrip from './components/FormAddtrip';
import { Privateadmin, PrivateUser } from './components/privateroute';
import { UserContext } from './context/userContext';
import { useContext, useEffect } from 'react';
import { API, setAuthToken } from './config/api';
import FormCountry from './components/formcountry';


// import { API, setAuthToken } from './config/api';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  const [state, dispatch] = useContext(UserContext);
  console.clear();
  console.log(state);

  //
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, [state])

  
  const checkUser = async () => {
    try {
      const response = await API.get('/check_auth');
      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={(
          <div className="App">
            <Home />
            <Card1 />
            <Group />
            <Footer />
          </div>)} />
        <Route path="/detail/:id" element={(
          <div>
            <Detail />
            <Footer />
          </div>
        )} />

        {/* private route */}
        <Route element={<PrivateUser />}>
          <Route path="/booknow" element={(
            <div>
              <Booknow />
              <Footer />
            </div>
          )} />
          <Route path="/profile/:id" element={(
            <div>
              <Profile />
              <Footer />
            </div>
          )} />
        </Route>

        <Route element={<Privateadmin />}>
          <Route path="/incoming" element={(
            <div>
              <Incoming />
              <Footer />
            </div>
          )} />

          <Route path="/addtrip" element={(
            <div>
              <Addtrip />
              <Footer />
            </div>
          )} />

          <Route path="/FormAddtrip" element={(
            <div>
              <FormAddtrip />
              <Footer />
            </div>
          )} />
          <Route path="/detailtripadmin/:id" element={(
            <div>
              <DetailTripAdmin />
              <Footer />
            </div>
          )} />
          
          <Route path="/formcountry" element={(
            <div>
              <FormCountry />
              <Footer />
            </div>
          )} />
        </Route>

      </Routes>
      </>
  );
}

export default App;
