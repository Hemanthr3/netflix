import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfilePage from "./ProfilePage";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(login({
          uid: user.uid,
          email:user.email
        }))
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
      {!user?
      (<LoginScreen/>)
      :(<Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
          <Route exact path="/login" element={<LoginScreen />}></Route>
          <Route exact path="/profile" element={<ProfilePage />}></Route>
        </Routes>)}
        
      </div>
    </Router>
  );
}

export default App;
