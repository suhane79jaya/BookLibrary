import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import PropTypes from "prop-types";

const BooksTable = ({ books }) => {
  //console.log("books", books);
  return (
    <>
      <div className="p-4">
        <h2>YOU LOGIN AS A Visitor</h2>

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
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <img
                    style={{ height: "200px", width: "200px" }}
                    src={book.image}
                    alt=""
                  />
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.author}
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

                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
BooksTable.propTypes = {
  books: PropTypes.any,
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  rating: PropTypes.number,
  description: PropTypes.string,
  onClose: PropTypes.func,
};
export default BooksTable;
