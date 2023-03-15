import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm";
import Modal from "antd/lib/modal/Modal";

const CreateCollection = () => {
  const REACT_APP_URL = process.env.REACT_APP_URL;
  const [collections, setCollections] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${REACT_APP_URL}/api/v1//collection`, {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCollections();
        
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong in input form");
    }
  };

  //get all cat
  const getAllCollections = async () => {
    try {
      const { data } = await axios.get(`${REACT_APP_URL}/api/v1/collections`);
      if (data.success) {
        setCollections(data.collections);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCollections();
  }, []);

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const id = selected._id;
      const { data } = await axios.put(
        `${REACT_APP_URL}/api/v1/collection/${id}`,
        {
          name: updatedName,
        }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCollections();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };
  //delete category
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${REACT_APP_URL}/api/v1/collection/${id}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCollections();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container mx-auto my-3 px-3">
        <div className="flex flex-row">
          <div className="w-1/4">
            <AdminMenu />
          </div>
          <div className="w-3/4 mt-10 flex flex-col items-center ">
            <h1 className="text-3xl font-bold mb-3">Manage Category</h1>
            <div className="p-3 w-1/2">
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-3/4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 bg-gray-200">Name</th>
                    <th className="px-4 py-2 bg-gray-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {collections?.map((c) => (
                    <tr key={c._id}  >
                      <td className="px-4 text-center py-2 border-b  ">{c.name}</td>
                      <td className="px-4 py-2 border-b  flex items-center justify-center ">
                        <button
                          className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mr-2"
                          onClick={() => {
                            setVisible(true);
                            setUpdatedName(c.name);
                            setSelected(c);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                          onClick={() => {
                            handleDelete(c._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
}

    export default CreateCollection;                      