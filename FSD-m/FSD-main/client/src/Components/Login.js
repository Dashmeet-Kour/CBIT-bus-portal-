import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import slide1 from "../images/slide1.jpeg";
import slide2 from "../images/slide2.jpeg";
import slide3 from "../images/slide3.jpeg";
import slide4 from "../images/slide4.jpeg";
import slide5 from "../images/slide5.jpeg";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const imgarr = [slide1, slide2, slide3, slide4, slide5];

  const handlechange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/auth/login", data)
      .then((res) => {
        localStorage.setItem(
          "CBIT",
          JSON.stringify({ ...res.data, password: "" })
        );

        setData({
          username: "",
          password: "",
        });
        navigate("/studentinfo");
      })
      .catch((error) => {
        swal(error.response.data, "", "error");
      });
  };
  console.log(data);
  return (
    <>
              <div className="loginbg">
                <form onSubmit={handleSubmit}>

                  <div className="form-group my-4">
                    <div>
                    <label htmlFor="exampleInputEmail1">USERNAME</label>
                    </div>
                    <input
                      type="text"
                      name="username"
                      value={data.username}
                      onChange={handlechange}
                      className="form-control loginform"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Username"
                    />
                    {/* <small id="emailHelp" className="form-text text-dark">
                      We'll never share your username with anyone else.
                    </small> */}
                  </div>
                  <div className="form-group">
                    <div>
                    <label htmlFor="exampleInputPassword1">PASSWORD</label>
                    </div>
                    <input
                      value={data.password}
                      onChange={handlechange}
                      type="password"
                      name="password"
                      className="form-control loginform"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary my-3">
                    Submit
                  </button>
                </form>
              </div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >

        {imgarr.map((items, index) => {

          return (
            <SwiperSlide>

              <img
                style={{ height: "530px", width: "100vw" }}
                src={items}
                alt=""
              />
            </SwiperSlide>
          );
        })}
  
      </Swiper>
    </>
  );
}
