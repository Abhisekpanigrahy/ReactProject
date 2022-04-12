import React from "react";
import Navbar from "../Components/Navbar";
import "./Home.css";
import Image1 from "../Assets/img1.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <section id="header" className="">
          <div className="container nav_bg">
            <div className="row">
              <div className="col-10 mt-5 mx-auto px-5">
                <div className="row">
                  <div className="col-md-6 pt-5 order-2 order-lg-1">
                    <h1>
                      Think simple <br /> Design simple.
                    </h1>
                    <div className="bottom-bar"></div>
                    <h4 className="my-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat adipisci eum natus incidunt perspiciatis.
                    </h4>
                    <div className="mt-3">
                      <button>
                        <p className="Title">Read More</p>
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={Image1} width={500} height={450} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
