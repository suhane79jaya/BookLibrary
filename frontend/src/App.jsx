//import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import SignUp from "./components/signUp/signUp";
import Header from "./components/header/header";
import Login from "./components/login/login";
import DashBoard from "./components/dashboard/dashBoard";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </>
  );
};

export default App;
