import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import Input from "../../components/Input/index.tsx";
import Btn from "../../components/Button/index.tsx";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { json, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../utils/RoutePaths.ts";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const ListBooks = (): JSX.Element => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();
  const books = JSON.parse(localStorage.getItem("books") || "[]") || [];

  const [filteredData, setFilteredData] = useState(books);

  // console.log(books);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const searchValue = value.toLowerCase();
    const filteredResults = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue)
      );
    });

    setFilteredData(filteredResults);
  };

  return (
    <div className="bg-white p-10 m-0">
      <div className="bg-inputBg p-10 rounded-2xl">
        <h1 className="font-bold text-4xl mb-6">Books</h1>
        <div className="mb-4 flex justify-between w-full p-0 m-0">
          <div className="w-1/4 bg-white">
            <Input
              placeholder="searching"
              name="search"
              onChange={(e) => handleSearchChange(e)}
              type="text"
              value={inputValue}
            />
          </div>
          <div className="w-1/4 justify-end flex">
            <Btn
              color="primary"
              size="small"
              text="Add Book"
              variant="contained"
              type="button"
              handleClick={() => navigate(ROUTE_PATHS.addBook)}
            />
          </div>
        </div>
        <div className="">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Book Title</TableCell>
                  <TableCell align="right">Book Category</TableCell>
                  <TableCell align="right">Book Author</TableCell>
                  <TableCell align="right">Book ISBN</TableCell>
                  <TableCell align="right">Book Version</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.length > 0
                  ? filteredData.map((book, index) => (
                      <TableRow
                        key={index + book.title}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {book.title}
                        </TableCell>
                        <TableCell align="right">{book.category}</TableCell>
                        <TableCell align="right">{book.author}</TableCell>
                        <TableCell align="right">{book.esbn}</TableCell>
                        <TableCell align="right">{book.version}</TableCell>
                        <TableCell align="right">
                          <RemoveRedEyeIcon className="me-2" />
                          <EditIcon className="me-2" />
                          <DeleteIcon />
                        </TableCell>
                      </TableRow>
                    ))
                  : books.map((book, index) => (
                      <TableRow
                        key={index + book.title}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {book.title}
                        </TableCell>
                        <TableCell align="right">{book.category}</TableCell>
                        <TableCell align="right">{book.author}</TableCell>
                        <TableCell align="right">{book.esbn}</TableCell>
                        <TableCell align="right">{book.version}</TableCell>
                        <TableCell align="right">
                          <RemoveRedEyeIcon className="me-2" />
                          <EditIcon className="me-2" />
                          <DeleteIcon />
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};
export default ListBooks;
