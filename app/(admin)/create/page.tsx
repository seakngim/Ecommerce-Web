"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./style.module.css";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BASE_URL = "https://store.istad.co/";

type ProductPostType = {
  name: string;
  desc: string;
  image: string;
  price: number;
  quantity: number;
};

const initialValues = {
  name: "",
  desc: "",
  image: "",
  price: 0,
  quantity: 0,
  fileIcon: null,
  fileProduct: null,
};

const FILE_SIZE = 1024 * 1024 * 2; // 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

const validationSchema = Yup.object().shape({
  categoryName: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  desc: Yup.string().nullable(),
  price: Yup.number().required("Required"),
  quantity: Yup.number().required("Required"),
  fileIcon: Yup.mixed()
    .test("fileFormat", "Unsupported Format", (value: any) => {
      if (!value) {
        return true;
      }
      return SUPPORTED_FORMATS.includes(value.type);
    })
    .test("fileSize", "File Size is too large", (value: any) => {
      if (!value) {
        true;
      }
      return value.size <= FILE_SIZE;
    })

    .required("Required"),
  fileProduct: Yup.mixed()
    .test("fileFormat", "Unsupported Format", (value: any) => {
      if (!value) {
        return true;
      }
      return SUPPORTED_FORMATS.includes(value.type);
    })
    .test("fileSize", "File Size is too large", (value: any) => {
      if (!value) {
        true;
      }
      return value.size <= FILE_SIZE;
    })

    .required("Required"),
});

export default function Product() {
  const router = useRouter();
  const handleUpload = async (file: any, name: any, typeFile: "product") => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);

    const rest = await fetch(`${BASE_URL}file/${typeFile}/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    const data = await rest.json();
    return data.image;
  };

  const handleSubmitProduct = async (value: ProductPostType) => {
    const res = await fetch(`${BASE_URL}products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(value),
    });
    if (res.ok) {
      router.push("/dashboard");
    }

    const data = await res.json();

    console.log("product uploade: ", data);
  };

  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // upload file product
          const fileProduct = values.fileProduct;
          const productImage = await handleUpload(
            fileProduct,
            values.name,
            "product"
          );

          // create product post
          const productPost: ProductPostType = {
            name: values.name,
            desc: values.desc,
            image: productImage,
            price: values.price,
            quantity: values.quantity,
          };

          // post product
          handleSubmitProduct(productPost);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="bg-gray-50 p-4 rounded-lg grid grid-cols-2 gap-8 m-5 md:ml-20 mx-5">
            <h1 className={`${style.title}`}>Create Product</h1>
            {/* Product Name */}
            <div>
              {/* Product Image*/}
              <div className="mb-5">
                <label className={`${style.label}`} htmlFor="fileProduct">
                  Product Image
                </label>
                <Field
                  type="file"
                  name="fileProduct"
                  id="fileProduct"
                  component={CustomInput}
                  setFieldValue={setFieldValue}
                  className={`${style.input}`}
                />
                <ErrorMessage
                  name="fileProduct"
                  component="div"
                  className={`${style.error}`}
                />
              </div>
            </div>{" "}
            <div>
              <div className="mb-5">
                <label className={`${style.label}`} htmlFor="name">
                  Product Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className={`${style.input}`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={`${style.error}`}
                />
              </div>

              {/* Product Description */}
              <div className="mb-5">
                <label className={`${style.label}`} htmlFor="desc">
                  Product Description
                </label>
                <Field
                  type="text"
                  name="desc"
                  id="desc"
                  component="textarea"
                  className={`${style.textarea}`}
                />
                <ErrorMessage
                  name="desc"
                  component="div"
                  className={`${style.error}`}
                />
              </div>

              {/* Product Price */}
              <div className="mb-5">
                <label className={`${style.label}`} htmlFor="price">
                  Product Price
                </label>
                <Field
                  type="number"
                  name="price"
                  id="price"
                  className={`${style.input}`}
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className={`${style.error}`}
                />
              </div>

              {/* Product Quantity */}
              <div className="mb-5">
                <label className={`${style.label}`} htmlFor="price">
                  Product Quantity
                </label>
                <Field
                  type="number"
                  name="quantity"
                  id="quantity"
                  className={`${style.input}`}
                />
                <ErrorMessage
                  name="quantity"
                  component="div"
                  className={`${style.error}`}
                />
              </div>
            </div>
            <div className="col-span-2 flex place-content-end ">
              {/* button submit */}
              <button type="submit" className={`${style.button}`}>
                Create
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}

const CustomInput = ({ field, setFieldValue }: any) => {
  const [imagePreview, setImagePreview] = useState("");

  const handleUploadFile = (e: any) => {
    const file = e.target.files[0];
    const localUrl = URL.createObjectURL(file);
    console.log(localUrl);
    setImagePreview(localUrl);

    setFieldValue(field.name, file);
  };
  return (
    <div>
      <input onChange={(e) => handleUploadFile(e)} type="file" />
      {imagePreview && (
        <Image src={imagePreview} alt="preview" width={200} height={200} />
      )}
    </div>
  );
};
