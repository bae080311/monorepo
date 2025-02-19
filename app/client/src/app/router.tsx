import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Main from "../pages/main";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};
