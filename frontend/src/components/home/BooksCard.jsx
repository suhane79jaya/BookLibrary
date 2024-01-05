// import { Link } from 'react-router-dom';
// import { PiBookOpenTextLight } from 'react-icons/pi';
// import { BiUserCircle } from 'react-icons/bi';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsInfoCircle } from 'react-icons/bs';
// import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from "./BookSingleCard";
import PropTypes from "prop-types";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};
BooksCard.propTypes = {
  books: PropTypes.any,
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  rating: PropTypes.number,
  description: PropTypes.string,
  onClose: PropTypes.func,
};
export default BooksCard;
