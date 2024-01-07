import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../api/API";

const DashBoard = () => {
  const [suc, setSuc] = useState();
  const navigate = useNavigate();
  const [showType, setShowType] = useState("table");
  axios.defaults.withCredentials = false;
  const [books, setBooks] = useState([]);
  console.log("dashboard Books", books);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log("Dashboard response API data:", res.data);

        if (res.data) {
          setSuc("Data from API URL");
          setBooks(res.data);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <div className="p-24">
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType(showType)}
          >
            Table
          </button>
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType("card")}
          >
            Social Card
          </button>
        </div>
        <h2>YOU LOGIN AS A ADMIN</h2>
        <p>{suc}</p>
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Image</th>

              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Rating
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Review
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, id) => (
              <tr key={id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {id + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <img
                    style={{ height: "200px", width: "200px" }}
                    src={book.image_url}
                    alt=""
                  />
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.authors}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.rating}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.review}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashBoard;
