import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import OAuth from "../components/OAuth";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const VendorSignUp = () => {
  const [fomrData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    avatar:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    carNumber: "",
    carModel: "",
    departure: "",
    destination: "",
    carImages: "",
  });

  const [error, setError] = useState(null);

  const [loding, setLoding] = useState(false);

  const [uploading, setUploading] = useState(false);

  const [imageUploadError, setImageUploadError] = useState(false);
  const [files, setFiles] = useState([]);

  //   const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...fomrData,
      [e.target.id]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoding(true);

      console.log(fomrData);
      const res = await fetch("/api/auth/vendorsignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fomrData),
      });

      const data = await res.json();

      if (data.success === false) {
        setError(data.message);
        setLoding(false);
        return;
      }

      setLoding(false);

      setError(null);

      navigate("/vendor-sign-in");
      // console.log(data);
    } catch (error) {
      setLoding(false);
      setError(error.message);
    }
  };

  //   const handleImageSubmit = (e) => {
  //       setUploading(true);
  //       setImageUploadError(false);
  //       const promises = [];

  //       for (let i = 0; i < files.length; i++) {
  //         promises.push(storeImage(files[i]));
  //       }
  //       Promise.all(promises)
  //         .then((urls) => {
  //           setFormData({
  //             ...fomrData,
  //             carImages: fomrData.carImages.concat(urls),
  //           });
  //           setImageUploadError(false);
  //           setUploading(false);
  //         })
  //         .catch((err) => {
  //           setImageUploadError('Image upload failed (2 mb max per image)');
  //           setUploading(false);
  //         });
  //   };

  //   const storeImage = async (file) => {
  //     return new Promise((resolve, reject) => {
  //       const storage = getStorage(app);
  //       const fileName = new Date().getTime() + file.name;
  //       const storageRef = ref(storage, fileName);
  //       const uploadTask = uploadBytesResumable(storageRef, file);
  //       uploadTask.on(
  //         'state_changed',
  //         (snapshot) => {
  //           const progress =
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           console.log(`Upload is ${progress}% done`);
  //         },
  //         (error) => {
  //           reject(error);
  //         },
  //         () => {
  //           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //             resolve(downloadURL);
  //           });
  //         }
  //       );
  //     });
  //   };

  return (
    <div className=" p-3 max-w-lg mx-auto">
      <h1 className=" text-3xl text-center font-semibold my-7">
        Vendor Sign Up
      </h1>

      <form onSubmit={handelSubmit} className=" flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="name"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="car number"
          className="border p-3 rounded-lg"
          id="carNumber"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="car model"
          className="border p-3 rounded-lg"
          id="carModel"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="departure"
          className="border p-3 rounded-lg"
          id="departure"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="destination"
          className="border p-3 rounded-lg"
          id="destination"
          onChange={handleChange}
        />

        {/* <p className="font-semibold">
          Car Image
          <span className='font-normal text-gray-600 ml-2'>
              The first image will be the cover (max 6)
            </span>
        </p> */}
        {/* <div className="flex gap-4">
          <input
            onChange={(e) => setFiles(e.target.files)}
            className="p-3 border border-gray-300 rounded w-full"
            type="file"
            id="images"
            accept="image/*"
            multiple
          />
          <button
            type="button"
            disabled={uploading}
            onClick={handleImageSubmit}
            className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div> */}

        <button
          disabled={loding}
          className=" bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loding ? "Loding..." : "Sign up"}
        </button>

        <OAuth />
      </form>

      <div className=" flex gap-2 mt-5">
        <p>Have an Account?</p>

        <Link to={"/vendor-sign-in"} className=" text-blue-500">
          Sign in
        </Link>
      </div>

      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default VendorSignUp;
