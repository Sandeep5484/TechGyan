import React from "react";
import vg from "../assets/1.png";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechGyan</h1>
                    <p>We provide solution to all your tech problems.</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="graphics"></img>
                <div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Maxime, perferendis et expedita molestias cum
                        distinctio placeat sequi unde perspiciatis cumque.
                    </p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>Who we Are?</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Recusandae nam unde voluptatibus quos praesentium
                        odit quam fugit eveniet debitis deleniti consequuntur
                        eum perferendis iure beatae natus in doloremque, odio
                        reiciendis excepturi minus corporis, vitae architecto
                        quae. Id ab voluptatem nostrum, soluta dolore autem,
                        beatae quae veritatis delectus deleniti, libero
                        excepturi nulla quam! Enim qui dolore iste culpa dolor
                        sapiente eos numquam delectus, doloremque quae cum earum
                        adipisci tempore hic nam blanditiis sint et fuga fugiat
                        modi nobis ipsum nemo? Itaque necessitatibus animi et
                        reiciendis rem possimus blanditiis dicta! Laboriosam,
                        voluptatem? Nam commodi adipisci quaerat blanditiis
                        voluptatum molestias, illo dolor laborum?
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "1s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home;
