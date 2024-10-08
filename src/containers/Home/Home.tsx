import React from "react";
import { FormControl, Button } from "@mui/material";

import Input from "../../components/Input/index.tsx";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";
import "./home.scss";
import Btn from "../../components/Button/index.tsx";
import { grey } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect } from 'react';

const Home = (): JSX.Element => {
  // const [selectedDate, setSelectedDate] = React.useState(new Date());

  const [selectedValue, setSelectedValue] = React.useState("");
  const [category, setCategory] = React.useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Your navigation logic here
  //   navigate('/Book');
  // }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const Navigate = useNavigate();




  const handleButton = () => {
    navigate('/Book');
    
  };
  

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log("Uploading file:", event.target.files[0]);
  };

  const initialValues = {
    title: "",
    author: "",
    category: "",
    price: "",
    version: "",
    edition: "",
    es: "",
    brief: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required"),
    author: Yup.string().required("This field is required"),
    category: Yup.string().required("This field is required"),
    version: Yup.string().required("This field is required"),
    brief: Yup.string().required("This field is required"),
    edition: Yup.string()
      .required("ISBN is required")
      // .matches(
      //   /^\d{1,5}-\d{1,5}-\d{1,5}-\d{1,5}-\d{1,5}$/,
      //   "ISBN must be in the format 978-3-16-148410-0"
      // )
      .test("length", "ISBN must be 13 digits", (value) => {
        if (value === undefined) {
          return true; // Allow undefined values
        }
        return value.replace(/-/g, "").length === 13;
      }),
    price: Yup.string()
      .required("Number is required")
      // .test("precision", "Number must have 2 decimal places", (value) => {
      //   if (value === undefined) {
      //     return true; // Allow undefined values
      //   }
      //   return value.toFixed(2) === value.toString();
      // }),
  });

  const handleSubmit = (values,) => {
    console.log("Form submitted:", values);
    // setSubmitting(true);
    const addBook = {
      title: values.title,
      author: values.author,
      category: category,
      price: values.price,
      version: values.version,
      older: selectedValue,
      edition: values.edition,
      esbn: values.es,
      brief: values.brief,
    };
    localStorage.setItem("user", JSON.stringify(addBook));
    // setSubmitting(false);
    // Navigate("/login");
  };

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <div className="bg-inputBg  p-10 m-0 ">
      <h1 className="text-3xl font-bold mb-3">Add Book</h1>
      <div className=" bg-white p-10 rounded-2xl">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, errors, handleChange }) => (
            <Form className="grid grid-cols-4">
              <div className="col-span-2">
                <Input
                  placeholder="Book Title"
                  value={values.title}
                  type="text"
                  name="title"
                  wrapperClassName=""
                  onChange={handleChange}
                  error={errors.title}
                />

                <Input
                  placeholder="Book Author"
                  value={values.author}
                  type="text"
                  name="author"
                  wrapperClassName="my-5"
                  onChange={handleChange}
                  error={errors.author}

                />

                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Catogeries
                  </InputLabel>
                  <Select
                    className="w-full !bg-inputBg"
                    labelId="demo-simple-select-label"
                    placeholder="Catogeries"
                    name="category"
                    id="demo-simple-select"
                    value={category}
                    label="Catogeries"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <p>{errors.category}</p>

                <Input
                  placeholder="Book Price"
                  value={values.price}
                  type="number"
                  name="price"
                  wrapperClassName="my-5"
                  onChange={handleChange}
                  error={errors.price}
                />

                <Input
                  placeholder="Book Version"
                  value={values.version}
                  type="text"
                  name="version"
                  wrapperClassName="my-5"
                  onChange={handleChange}
                  error={errors.version}

                />

                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Book Older Vsersion
                  </InputLabel>
                  <Select
                    className="w-full !bg-inputBg"
                    labelId="demo-simple-select-label"
                    placeholder="Book Older Version"
                    id="demo-simple-select"
                    value={selectedValue}
                    name="older"
                    label="Book Older Version"
                    onChange={(e) => setSelectedValue(e.target.value)}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                {/* <p>{errors.older}</p> */}


                <Input
                  placeholder="Book Edition"
                  value={values.edition}
                  type="text"
                  name="edition"
                  wrapperClassName="my-5"
                  onChange={handleChange}
                  error={errors.edition}

                />

                <Input
                  placeholder="Book ESBN"
                  value={values.es}
                  type="text"
                  name="es"
                  wrapperClassName="my-5"
                  onChange={handleChange}
                  error={errors.es}

                />

                {/* <DatePicker
                  label="Basic date picker"
                  sx={{
                    ".MuiTextField-root": {
                      width: "100%",
                    },
                  }}
                /> */}
              </div>

              {/* </div> */}

              <div className="col-span-2 pt-6 mb-6">
                <div className="shadow-xl	shadow-gray-700 h-1/3 w-40 m-auto mb-6 rounded-md">
                  {selectedFile && (
                    <img src={URL.createObjectURL(selectedFile)} />
                  )}
                </div>
                <p className="text-center font-thin mb-6">
                  Best dimensions for book cover image are 128*200
                </p>

                <div className="flex justify-center">
                  <Button variant="contained" component="label">
                    Upload File
                    <input
                      type="file"
                      hidden
                      onChange={(e) => handleFileChange(e)}
                    />
                  </Button>
                </div>

                <div className="mt-4 ms-6 w-full rounded-2xl">
                  <Input
                    placeholder="Book Breif"
                    type="text"
                    multiline={true}
                    rows={4}
                    maxLength={800}
                    onChange={handleChange}
                    value={values.brief}
                    name="brief"
                    wrapperClassName="rounded-xl"
                    error={errors.brief}
                  />

                  <div className="flex justify-end mt-6">
                    <Btn
                      color="secondary"
                      variant="contained"
                      wrapperClassName="me-2"
                      size="small"
                      text="Cancel"
                      type="button"
                      // onChange={handleChange}
                    />
                    <Btn
                      type="button"
                       handleClick={() => handleSubmit(values)}
                      // onChange={handleChange}
                      disabled={isSubmitting}
                      color="primary"
                      variant="contained"
                      size="small"
                      wrapperClassName=""
                      text="Save"
                      //
                    />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="">
        <Btn
    //  type="submit"
    //  handleClick={() => handleSubmit(Navigate("/Book"))}
    onClick={handleButton}
    // onChange={Navigate("/Book")}
    // onChange={handleChange}
    // disabled={isSubmitting}
    color="primary"
    variant="contained"
    size="small"
    wrapperClassName=""
    text="ADD book"
        />
      </div>
    </div>
  );
};

export default Home;
