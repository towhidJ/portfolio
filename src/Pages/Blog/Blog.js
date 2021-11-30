import React from "react";
import "./Blog.css";
const Blog = () => {
    return (
        <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="https://i.imgur.com/ZTkt4I5.jpg"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">Java Script</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        - Towhidul Islam
                    </h6>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btnCard mr-2">
                        <i className="fas fa-link"></i> Read more ...
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Blog;
