import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Logout = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = false;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/logout`)
      .then((res) => {
        if (res.data.status === 200) {
          if (res.data.role === "admin" || res.data.role === "visitor")
            window.localStorage.clear();

          alert("logout Successfully");
          navigate("/");
        } else {
          alert("user found,you are login ");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="p-24">
      {/* {alert("you are logged out")}
      {navigate("/")} */}
    </div>
  );
};

export default Logout;
