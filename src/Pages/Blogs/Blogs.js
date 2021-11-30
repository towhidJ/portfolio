import React from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    return (
        <>
            <div className="mt-5 p-5">
                <div class="">
                    <div class="towhid_tm_title_holder py-5">
                        <span className="mt-5">Blog</span>
                        <h3>My Blog</h3>
                    </div>
                    <div className="container mx-auto mt-4 row ">
                        <Blog />
                        <Blog />
                        <Blog />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
