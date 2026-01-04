import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
//import Counter from "./Components/Counter"
//import Todo from "./Components/Todo"
//import DigitalClock from "./Components/DigitalClock"
//import Calculator from "./Components/Calculator"
//import Quotes from "./Components/Quotes"
//import Infinite from "./Components/Infinite"
//import SearchWithDebouncing from "./Components/SearchWithDebouncing"
//import FilterSort from "./Components/FilterSort"
//import ToogleTheme from "./Components/ToogleTheme"
// import Accordion from "./Accordion"
//import useLocalStorage from "./Components/useLocalStorage"
//import UseListWithSkeleton from "./Components/UseListWithSkeleton"
// import Reducer from "./Components/Reducer"
// import AsyncSearch from "./Components/AsyncSearch"
// import ImageUploader from "./Components/ImageUploader"

import { AuthProvider, useAuth } from './Components/AuthContext';
import { ProtectedRoute } from "./Components/ProtectedRoute";



const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); // Page change karne ke liye

  const handleLogin = () => {
    login("Rahul"); // Fake login
    navigate("/dashboard"); // Login ke baad Dashboard bhejo
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In as Rahul</button>
    </div>
  );
};

const Dashboard = () => {
  const { user, logout } = useAuth();
  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard (VIP Area)</h2>
      <p>Welcome, {user?.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const App = () => {
// it is for useLocalStorage
  // const [name , setName] = useLocalStorage("user-name", "sohil")

  // const [count , setCount] = useLocalStorage<number>("counter", 0);
  return (
    <>
     {/*<Counter/>*/}
     {/*<Todo/>*/}
     {/* <DigitalClock/>*/}
     {/* <Calculator/> */}
     {/* <Quotes/> */}
     {/* <Infinite/> */}
     {/* <SearchWithDebouncing/> */}
    {/* <FilterSort/> */}
    {/* <ToogleTheme/> */}
    {/* <Accordion/> */}

    {/* <div style={{padding : "20px"}}>
      <h1>Custom HOOK</h1> */}
{/* it is also for useLocalStorage */}
    {/* <input type="text"
    value={name}
    onChange={(e)=> setName(e.target.value)}
    placeholder="enter name" />
    <p>hello , <strong>{name}</strong></p>

    <hr />

    <button onClick={()=>setCount(prev => prev + 1)}>
      count is {count}
    </button>

    <p style={{color : "gray" , marginTop : "20px"}}>
      (refresh the page , the content will be still same)
    </p> */}
    {/* </div> */}

    {/* <UseListWithSkeleton/> */}
    {/* <Reducer/> */}
    {/* <AsyncSearch/> */}
    {/* <ImageUploader/> */}

{/* authentication system start here */}
      <BrowserRouter>
      {/* 1. Sabko AuthProvider se wrap karo */}
      <AuthProvider>
        <Routes>
          
          {/* Public Route (Koi bhi aa sakta hai) */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Route (Sirf logged in users) */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />

          {/* Default Route */}
          <Route path="*" element={<LoginPage />} />
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
 {/* End here */}
    </>
  )
}

export default App
