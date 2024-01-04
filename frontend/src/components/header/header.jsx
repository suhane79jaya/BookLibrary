import { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(false);
  const [setTab] = useState(window.location.pathname);
  axios.defaults.withCredentials = true;
  return (
    <nav className="main-nav">
      <AppBar postion="sticky">
        <Toolbar>
          <Typography>
            <LibraryBooksIcon />
            <span>B</span>ook
            <span>S</span>helf
          </Typography>
          <Tabs
            sx={{ ml: "center" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <div className="header">
              <Tab
                LinkComponent={NavLink}
                to="/dashboard"
                label="Dashboard"
                onClick={() => setTab("/dashboard")}
              ></Tab>
              <Tab LinkComponent={NavLink} to="/" label="Home" />
              <Tab
                LinkComponent={NavLink}
                to="/books/create"
                label="MyBookShelf"
              />{" "}
              <Tab LinkComponent={NavLink} to="/login" label="Login"></Tab>
            </div>
          </Tabs>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Header;
