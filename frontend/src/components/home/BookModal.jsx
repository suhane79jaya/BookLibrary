import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import PropTypes from "prop-types";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[450px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          <img
            style={{ height: "200px", width: "200px" }}
            src={book.image}
            alt={book.title}
          ></img>
        </h2>
        {/* <h4 className="my-2 text-gray-500">{book._id}</h4> */}

        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <h4 className="my-2 text-gray-500">Rating:{book.rating}</h4>
        <p className="mt-4">Anything you want to know</p>
        <p className="my-2">Description:{book.description} </p>
      </div>
    </div>
  );
};
BookModal.propTypes = {
  book: PropTypes.any,
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  rating: PropTypes.number,
  description: PropTypes.string,
  onClose: PropTypes.func,
};
export default BookModal;
