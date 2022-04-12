import React from "react";
import "../Components/Card.css";

export default function Card() {
  return (
    <div>
      <div className="container py-5">
        <div className="row px-5">
          <div className="col-lg-3 col-12 px-5">
            <ol>
              <span>
                <li>About us</li>
              </span>
              <li>Our Story</li>
              <li>Our Vision</li>
            </ol>
          </div>

          <div className="col-lg-9 col-12 px-5">
            <h2>
              UI/UX Design -
              <br /> We Are An Awesome Agency.
            </h2>
            <div className="row py-3 text">
              <div className="col-lg-4 col-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                est quis perspiciatis soluta praesentium eveniet ipsa odit
                facilis, consequatur possimus tempora quos debitis rerum dolore
                molestiae nisi ipsam? Impedit, harum. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Illum, officia qui. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Eaque, ab.
              </div>
              <div className="col-lg-4 col-12 px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                voluptatibus amet in ipsum itaque excepturi? Alias corporis
                cumque velit cum est ducimus consequatur iusto iure aut. Iure
                magni ratione reiciendis. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Optio, voluptas. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Hic, eos!
              </div>
              <div className="col-lg-4 col-12 px-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                iste ab, veritatis dolor nam enim distinctio libero magnam
                consequuntur rerum fugit voluptate hic numquam eius consequatur
                obcaecati, repellendus nulla beatae! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Inventore, error! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Aliquam, nostrum.
              </div>
            </div>

            <div className="mt-3">
              <button>
                <p className="Title">Learn More</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
