import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState({});

  const sendEmail = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await emailjs
      .send(
        "service_4c8gpdc",
        "template_0g3bx2o",
        data,
        "user_NPU9jRD38QG7bjKnj1qca"
      )
      .then(
        (result) => {
          toast.success("Message Send", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsLoading(false);
          console.log(result.text);
        },
        (error) => {
          toast.error("Message not send", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );

    setData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;

    setData((values) => ({
      ...values,
      [name]: e.target.value,
    }));
  };

  return (
    <div className="bg-bgSecondary  pt-16 ">
      <div className="flex justify-center">
        <div className=" border-b-2 border-primary p-2 mb-10 font-bold text-white text-4xl px-10">
          Contact Me
        </div>
      </div>
      <div className="flex justify-center lg:gap-20 flex-col lg:flex-row items-center">
        {/* address */}
        <div className="p-10">
          <div className="flex items-center text-white px-5 pb-5">
            <div className="">
              <AiOutlineMail className="w-20 h-12" />
            </div>
            <div className="">
              <h3>Email Address</h3>
              <p className="text-primary">saavedra.lvnry@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center text-white p-5">
            <div className="">
              <AiOutlinePhone className="w-20 h-12" />
            </div>
            <div className="">
              <h3>Contact Number</h3>
              <p className="text-primary">+639664039699</p>
            </div>
          </div>
          <div className="flex items-center text-white p-5">
            <div className="">
              <AiOutlineEnvironment className="w-20 h-12" />
            </div>
            <div className="">
              <h3>Home Address</h3>
              <p className="text-primary">Zamboanga City, Philippines</p>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="p-10 ">
          <ToastContainer />
          <form onSubmit={sendEmail} className="lg:w-[40rem] max-w-xl">
            <div className="flex">
              <input
                disabled={isLoading}
                className="rounded w-1/2  mr-2 p-1"
                type="text"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
              ></input>
              <input
                disabled={isLoading}
                className="rounded w-1/2  p-1"
                type="email"
                placeholder="Email Address"
                name="email"
                value={data.email}
                onChange={handleChange}
              ></input>
            </div>
            <div className="mt-4">
              <textarea
                disabled={isLoading}
                className="rounded w-full h-[10rem]"
                placeholder="Message"
                name="message"
                value={data.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex justify-center pt-4 ">
              <button
                type="submit"
                onClick={(e) => sendEmail(e)}
                className="  justify-center hover:border-secondary border-4 ease-in-out duration-300 rounded-lg w-[10rem] flex bg-white p-1 items-center gap-2 text-primary  "
              >
                {isLoading ? (
                  <div class=" px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse ">
                    loading...
                  </div>
                ) : (
                  <>
                    {" "}
                    Send Message <BsSend />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
