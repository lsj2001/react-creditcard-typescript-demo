import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export interface IMenuProps { }

const MenuPage: React.FunctionComponent<IMenuProps> = (props) => {
    const [userName, setUserName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    return (
        <div className="home-container">
            <input
                className="home-input"
                type="text"
                id="name"
                name="name"
                placeholder="Fisrt Name"
                value={userName}
                onChange={handleChange}
            />
            <Link to={userName ? "/card?name=" + userName : ""}>
                <button className="home-button">Login</button>
            </Link>
        </div>
    );
};

export default MenuPage;
