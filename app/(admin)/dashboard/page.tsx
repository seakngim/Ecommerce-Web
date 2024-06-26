"use client";
import { ProductType } from "@/lib/definitions";
import { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import DataTable, { TableColumn } from "react-data-table-component";
import { RiEditLine, RiDeleteBin3Line, RiEyeLine } from "react-icons/ri";

export default function Dashboard() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const [productDetail, setProductDetail] = useState<ProductType | null>(null);
  // fetch products
  useEffect(() => {
    setLoading(true);
    fetch("https://store.istad.co/api/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const [imagePlaceholder, setImagePlaceholder] = useState<string>(
    "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
  );

  const handleViewProduct = (product: ProductType) => {
    setProductDetail(product);
    setOpenModal(true);
  };

  const columns: TableColumn<ProductType>[] = [
    {
      name: "Image",
      selector: (row): any => (
        <Image width={16} height={16} src={row.image} alt={row.image} />
      ),
      sortable: true,
    },
    {
      name: "Product Title",
      selector: (row) => row.name,
    },
    {
      name: "Price (USD)",
      selector: (row) => row.price,
      sortable: true,
    },

    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row): any => (
        <div>
          <button
            onClick={() => handleViewProduct(row)}
            className="text-blue-600 mx-2"
          >
            <RiEyeLine />
          </button>
          <button className="text-yellow-400 mx-2">
            <RiEditLine />
          </button>
          <button className="text-red-600 mx-2">
            <RiDeleteBin3Line />
          </button>
        </div>
      ),
    },
  ];

  return (
    <main className="h-screen">
      <DataTable
        fixedHeader
        progressPending={loading}
        columns={columns}
        data={products}
        pagination
        customStyles={customStyles}
        striped
        highlightOnHover
      />
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Product Detial</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 grid grid-cols-2">
            <Image
              src={productDetail?.image || imagePlaceholder}
              alt={productDetail?.name || "Untitle"}
              width={250}
              height={300}
            />
            <div>
              <h3 className="text-3xl text-gray-700">
                {productDetail?.name || "Untitle"}
              </h3>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {productDetail?.description || "No description"}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <span>Price:</span> $ {productDetail?.price || "No price"}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <span>Category: </span>
                {productDetail?.category || "No category"}
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  );
}

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "38px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "1.2rem",
      backgroundColor: "#f1f1f1",
    },
  },
  cells: {
    style: {
      paddingLeft: "38px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};
