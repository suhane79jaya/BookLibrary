import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Input } from "semantic-ui-react";
import { API_URI } from "../../api/API";
const Posts = () => {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  axios.defaults.withCredentials = false;
  useEffect(() => {
    axios.get(API_URI).then((response) => {
      console.log("API Response", response.data.results.books);
      setAPIData(response.data.results.books);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div
      style={{
        padding: "50px",
        margin: "50px",
      }}
    >
      <div>
        <Input
          style={{
            width: "382px",
            height: "35px",
            margin: "20px 20px 0px102px",
            border: "1px solid black",
          }}
          icon="search"
          placeholder="Search & Filter Books..."
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <div>
        <Card.Group
          itemsPerRow={3}
          style={{
            marginTop: "20px",
            height: "215px",
            overflowY: "auto",
            border: "1px solid black",
            width: "382px",
          }}
        >
          {searchInput.length > 1
            ? filteredResults.map((item, i) => {
                return (
                  <Card key={i}>
                    <Card.Content>
                      <Card.Header>
                        <img
                          style={{ height: "50px", width: "50px" }}
                          src={item.book_image}
                          alt="imagebook"
                        />
                        {item.title} by {item.author}{" "}
                        <p>Description:{item.description}</p>
                      </Card.Header>
                      {/* <Card.Description>{item.email}</Card.Description> */}
                    </Card.Content>
                  </Card>
                );
              })
            : APIData.map((item, i) => {
                return (
                  <Card key={i}>
                    <Card.Content>
                      <Card.Header>
                        <img
                          style={{
                            height: "50px",
                            width: "50px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          src={item.book_image}
                          alt="imagebook"
                        />
                        {item.title} by {item.author}{" "}
                        <p>Description:{item.description}</p>
                      </Card.Header>

                      {/* <Card.Description>{item.email}</Card.Description> */}
                    </Card.Content>
                  </Card>
                );
              })}
        </Card.Group>
      </div>
    </div>
  );
};
export default Posts;
