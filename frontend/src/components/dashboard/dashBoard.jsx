import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const DashBoard = () => {
  const [suc, setSuc] = useState();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard")
      .then((res) => {
        if (res.data === "Success") {
          setSuc("Successed Ok");
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="p-24">
      <h2>dashBoard</h2>
      <p>{suc}</p>
    </div>
  );
};

export default DashBoard;
