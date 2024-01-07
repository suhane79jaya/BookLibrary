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
import Posts from "./components/bookshelf/bookShelf";
import Logout from "./components/logout/logout";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/Home" element={<Home />}></Route>

        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/bookShelf" element={<Posts />}></Route>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </>
  );
};

export default App;
