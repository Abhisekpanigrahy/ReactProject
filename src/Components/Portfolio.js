import React from "react";
import "../Components/Portfolio.css";
import Img3 from "../Assets/img3.png";
import Img9 from "../Assets/img9.png";
import Img4 from "../Assets/img4.png";
import Img5 from "../Assets/img5.png";
import Img6 from "../Assets/img6.png";
import Img7 from "../Assets/img7.png";
import Img8 from "../Assets/img8.png";
import Img10 from "../Assets/img10.png";
import Img12 from "../Assets/img12.png";
import Img13 from "../Assets/img13.png";
import Img14 from "../Assets/img14.png";
import Img15 from "../Assets/img15.png";
import Img16 from "../Assets/img16.png";
import Img17 from "../Assets/img17.png";
import Img18 from "../Assets/img18.png";
import Img19 from "../Assets/img19.png";
import { Card } from "react-bootstrap";

export default function Portfolio() {
  return (
    <div>
      <div className="container py-5">
        <div className="row px-5">
          <div className="col-lg-9 col-12 px-5">
            <h2>Awesome Portfolio</h2>
            <div className="bottom-bar my-3"></div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus distinctio, laudantium mollitia similique rerum est!{" "}
              <br />
              Lorem ipsum dolor.
            </p>
          </div>

          <div className="col-lg-3 col-12 px-5">
            <p className="text">View all projects</p>
          </div>
        </div>
      </div>

      <div className="py-1">
        <img src={Img3} alt="" width={1519} height={700} />
      </div>

      <div className="container py-5">
        <div className="row px-5">
          <div className="col-lg-4 col-12 px-4">
            <h2>Core Features</h2>
            <div className="bottom-bar my-3"></div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis ducimus, ipsa ea tempore, cum nemo alias sint veniam
              eos deserunt autem maiores id aliquam, facere blanditiis natus
              soluta rem dolor.
            </p>
            <div className="mt-5">
              <button>
                <p className="Title">View all Features</p>
              </button>
            </div>
          </div>

          <div className="col-lg-8 col-12">
            <div className="row py-3 text">
              <div className="col-lg-6 col-12">
                <img src={Img12} alt="" />
                <h3 className="my-4">Super Responsive</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                est quis perspiciatis soluta praesentium eveniet ipsa odit
                facilis, consequatur possimus tempora quos debitis rerum dolore
                molestiae nisi ipsam? Impedit, harum. Lorem ipsum dolor sit amet
              </div>
              <div className="col-lg-6 col-12 px-3">
                <img src={Img13} alt="" />
                <h3 className="mb-4 pt-3">Pixel Perfect</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                voluptatibus amet in ipsum itaque excepturi? Alias corporis
                cumque velit cum est ducimus consequatur iusto iure aut. Iure
                magni ratione reiciendis. Lorem ipsum dolor sit amet.
              </div>
            </div>

            <div className="row py-3 text">
              <div className="col-lg-6 col-12 px-3">
                <img src={Img14} alt="" />
                <h3 className="mb-4 pt-3">Lovely Shortcodes</h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                iste ab, veritatis dolor nam enim distinctio libero magnam
                consequuntur rerum fugit voluptate hic numquam eius consequatur
                obcaecati, repellendus nulla beatae! Lorem ipsum dolor sit amet.
              </div>

              <div className="col-lg-6 col-12 px-3">
                <img src={Img15} alt="" />
                <h3 className="mb-4 pt-3">Creative Design</h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                iste ab, veritatis dolor nam enim distinctio libero magnam
                consequuntur rerum fugit voluptate hic numquam eius consequatur
                obcaecati, repellendus nulla beatae! Lorem ipsum dolor sit amet.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-1">
        <Card className="bg-dark text-white text-center">
          <Card.Img src={Img9} width={1519} height={400} alt="Card image" />
          <Card.ImgOverlay>
            <h2 className="my-5">
              Website startegy & Implementation <br />
              Let's get started with Joale. PSD Template
            </h2>
            <div className="mt-5">
              <button>
                <p className="Title">PURCHASE NOW</p>
              </button>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className="container py-5">
        <div className="row px-5">
          <div className="col-lg-3 col-12 px-5">
            <img src={Img16} alt="" width={50} />
            <h3 className="my-3">01 / Planning</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              dolor. Deserunt saepe expedita maxime quae, pariatur repellat odio
              quam est vel sint obcaecati fugiat repudiandae, tenetur maiores.
            </p>
            <h6 className="my-4">VIEW MORE</h6>
          </div>
          <div className="col-lg-3 col-12 px-5">
            <img src={Img17} alt="" width={50} />
            <h3 className="my-3">02 / Design</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis commodi nulla consectetur repudiandae consequuntur omnis
              quia perferendis deserunt doloremque reiciendis dolorem.
            </p>
            <h6 className="my-4">
              <span>VIEW MORE </span>
            </h6>
          </div>
          <div className="col-lg-3 col-12 px-5">
            <img src={Img18} alt="" width={50} />
            <h3 className="my-3">03/Development</h3>
            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At vel
              quisquam eaque, doloremque magnam ab est laborum exercitationem
              cumque eum expedita sunt impedit facere quis.
            </p>
            <h6 className="my-4">VIEW MORE</h6>
          </div>
          <div className="col-lg-3 col-12 px-5">
            <img src={Img19} alt="" width={50} />
            <h3 className="my-3">04 / Promotion</h3>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              expedita, voluptatum quas labore deserunt quam cumque accusantium
              delectus illo, voluptas deleniti nam qui iste officias.
            </p>
            <h6 className="my-4">VIEW MORE</h6>
          </div>
        </div>
      </div>

      <div className="py-1">
        <img src={Img4} alt="" width={1519} height={550} />
      </div>

      <div className="container py-5">
        <div className="row px-5">
          <div className="col-lg-7 col-12">
            <h2>Our Awards & Honours</h2>
            <div className="bottom-bar my-3"></div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus distinctio, laudantium mollitia similique rerum est!{" "}
              <br />
              Lorem ipsum dolor.
            </p>
          </div>

          <div className="col-lg-5 col-12">
            <p className="text">
              <div style={{ display: "flex" }}>
                <h6>Mobile Apps</h6>
                <h6 style={{ marginLeft: "30px" }}>
                  <span> Branding </span>
                </h6>
                <h6 style={{ marginLeft: "30px" }}> Motion </h6>
                <h6 style={{ marginLeft: "30px" }}>Graphics</h6>
                <h6 style={{ marginLeft: "30px" }}>UI/UX Design</h6>
              </div>
            </p>
          </div>

          <div className="py-1 text-center">
            <img src={Img10} alt="" width={1000} height={430} />
          </div>
        </div>
      </div>

      <div className="container py-3">
        <div className="row px-5">
          <div className="col-lg-12 col-12 px-5">
            <h2>Our Blog</h2>
            <div className="bottom-bar my-3"></div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus distinctio, laudantium mollitia similique rerum est!{" "}
              <br />
              Lorem ipsum dolor.
            </p>
          </div>
        </div>

        <div className="row px-5 py-4">
          <div className="col-lg-4 col-12 px-5">
            <img src={Img5} alt="" width={380} />
            <h6 className="mt-2">AGENCY Nov 15,2017</h6>
            <h5 className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h5>
          </div>

          <div className="col-lg-4 col-12 px-5">
            <img src={Img6} alt="" width={380} />
            <h6 className="mt-2">AGENCY Nov 15,2017</h6>
            <h5 className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h5>
          </div>

          <div className="col-lg-4 col-12 px-5">
            <img src={Img7} alt="" width={380} />
            <h6 className="mt-2">AGENCY Nov 15,2017</h6>
            <h5 className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h5>
          </div>
        </div>
      </div>

      <div className="py-1">
        <Card className="bg-dark text-white text-center">
          <Card.Img src={Img9} width={1519} height={350} alt="Card image" />
          <Card.ImgOverlay>
            <h2
              className="my-5"
              style={{ textAlign: "left", marginLeft: "180px" }}
            >
              Website startegy & Implementation <br />
              Let's get started with Joale. PSD Template. <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
            <h5 style={{ textAlign: "left", marginLeft: "180px" }}>
              Jacob Latimore
            </h5>
            <p
              style={{
                textAlign: "left",
                marginLeft: "180px",
                color: "rgb(220, 98, 98)",
              }}
            >
              Graphic Design at Joale Agency
            </p>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className="py-5 text-center">
        <img src={Img8} alt="" width={1000} height={320} />
      </div>
    </div>
  );
}
