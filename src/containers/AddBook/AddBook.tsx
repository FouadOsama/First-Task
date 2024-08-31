import React from "react";
import { FormControl, Button, Autocomplete, TextField } from "@mui/material";

import Input from "../../components/Input/index.tsx";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";
import Btn from "../../components/Button/index.tsx";
import { grey } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./AddBook.scss";
import { ROUTE_PATHS } from "../../utils/RoutePaths.ts";

const AddBook = (): JSX.Element => {
  const navigate = useNavigate();
  // const [selectedDate, setSelectedDate] = React.useState(new Date());
  const catogeries = ["Action", "Drama", "Romance"];

  const [selectedValue, setSelectedValue] = useState("");
  const [category, setCategory] = useState(catogeries[0]);

  const [selectedFile, setSelectedFile] = useState(null);

  const initialValues = {
    title: "",
    author: "",
    category: "",
    price: "",
    version: "",
    edition: "",
    es: "",
    brief: "",
    date: null,
  };

  const existingData = JSON.parse(localStorage.getItem("books") || "[]") || [];

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
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
    price: Yup.string().required("Number is required"),
    // .test("precision", "Number must have 2 decimal places", (value) => {
    //   if (value === undefined) {
    //     return true; // Allow undefined values
    //   }
    //   return value.toFixed(2) === value.toString();
    // }),
  });

  const handleSubmit = (values) => {
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
      date: values.date,
    };

    if (selectedFile) addBook["coverPhoto"] = URL.createObjectURL(selectedFile);
    existingData.push(addBook);

    localStorage.setItem("books", JSON.stringify(existingData));
    navigate(ROUTE_PATHS["booksList"]);
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
          {({
            isSubmitting,
            values,
            errors,
            handleChange,
            setFieldValue,
            setFieldTouched,
            touched,
          }) => (
            <Form className="grid grid-cols-4">
              <div className="col-span-2">
                <Input
                  placeholder="Book Title"
                  wrapperClassName="my-5"
                  value={values.title}
                  type="text"
                  name="title"
                  onChange={(e) => {
                    setFieldTouched("title");
                    setFieldValue("title", e.target.value);
                  }}
                  error={touched["title"] ? errors.title : ""}
                />

                <Input
                  placeholder="Book Author"
                  value={values.author}
                  type="text"
                  wrapperClassName="my-5"
                  name="author"
                  onChange={(e) => {
                    setFieldTouched("author");
                    setFieldValue("author", e.target.value);
                  }}
                  error={touched["author"] ? errors.author : ""}
                />

                {/* <FormControl fullWidth size="small"> */}
                {/* <InputLabel id="demo-simple-select-label">
                    Catogeries
                  </InputLabel> */}

                {/* <Field name="category" as={Select} >
                    {({ field }) => (
                      <Select {...field} className="w-full !bg-inputBg">
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                        <MenuItem value="option3">Option 3</MenuItem>
                      </Select>
                    )}
                  </Field> */}

                {/* <Select
                    className="w-full !bg-inputBg"
                    labelId="demo-simple-select-label"
                    // placeholder="Catogeries"
                    id="demo-simple-select"
                    label="Catogeries"
                    name="category"
                    value={values.category}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setFieldTouched("category");
                      setFieldValue("category", e.target.value);
                    }}
                  >
                    <MenuItem value="10">Ten</MenuItem>
                    <MenuItem value="20">Twenty</MenuItem>
                    <MenuItem value="30">Thirty</MenuItem>
                  </Select>
                </FormControl> */}
                <div className="w-full">
                  <Autocomplete
                    className="w-full"
                    disablePortal
                    options={catogeries}
                    sx={{ width: 300 }}
                    size="small"
                    value={values.category}
                    onChange={(e, newValue) => {
                      setCategory(newValue!);
                      setFieldTouched("category");
                      setFieldValue("category", newValue);
                    }}
                    inputValue={values.category}
                    onInputChange={(event, newInputValue) => {
                      setFieldTouched("category");
                      setFieldValue("category", newInputValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Categories" />
                    )}
                  />
                  {/* <p className="text-danger">
                  {touched["category"] ? errors.category : ""}
                </p> */}
                </div>
                <Input
                  placeholder="Book Price"
                  value={values.price}
                  type="number"
                  name="price"
                  wrapperClassName="my-5"
                  onChange={(e) => {
                    setFieldTouched("price");
                    setFieldValue("price", e.target.value);
                  }}
                  error={touched["price"] ? errors.price : ""}
                />

                <Input
                  placeholder="Book Version"
                  value={values.version}
                  type="text"
                  name="version"
                  wrapperClassName="my-5"
                  onChange={(e) => {
                    setFieldTouched("version");
                    setFieldValue("version", e.target.value);
                  }}
                  error={touched["version"] ? errors.version : ""}
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
                {/* <p className="text-danger">{errors.older}</p> */}

                <Input
                  placeholder="Book Edition"
                  value={values.edition}
                  type="text"
                  name="edition"
                  wrapperClassName="my-5"
                  onChange={(e) => {
                    setFieldTouched("edition");
                    setFieldValue("edition", e.target.value);
                  }}
                  error={touched["edition"] ? errors.edition : ""}
                />

                <Input
                  placeholder="Book ESBN"
                  value={values.es}
                  type="text"
                  name="es"
                  wrapperClassName="my-5"
                  onChange={(e) => {
                    setFieldTouched("es");
                    setFieldValue("es", e.target.value);
                  }}
                  error={touched["es"] ? errors.es : ""}
                />

                <DatePicker
                  label="Basic date picker"
                  value={values.date}
                  onChange={(newValue) => {
                    setFieldTouched("date");
                    setFieldValue("date", newValue);
                  }}
                  sx={{
                    ".MuiTextField-root": {
                      width: "100%",
                    },
                  }}
                />
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
                    value={values.brief}
                    name="brief"
                    wrapperClassName="rounded-xl"
                    onChange={(e) => {
                      setFieldTouched("brief");
                      setFieldValue("brief", e.target.value);
                    }}
                    error={touched["brief"] ? errors.brief : ""}
                  />

                  <div className="flex justify-end mt-6">
                    <Btn
                      color="secondary"
                      variant="contained"
                      wrapperClassName="me-2"
                      size="small"
                      text="Cancel"
                      type="button"
                      handleClick={() => navigate(ROUTE_PATHS.booksList)}
                    />
                    <Btn
                      type="submit"
                      disabled={isSubmitting}
                      color="primary"
                      variant="contained"
                      size="small"
                      wrapperClassName=""
                      text="Save"
                    />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddBook;
