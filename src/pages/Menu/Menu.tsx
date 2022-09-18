import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Menu.css";

export interface IMenuProps { }

const MenuPage: React.FunctionComponent<IMenuProps> = (props) => {
    const [params] = useSearchParams();
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const name = params.getAll("name")[0];
        if (name) {
            setUserName(name);
        } else {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className="menu-head">
                <div className="menu-head-container">
                    <Link to={"/card?name=" + userName}>
                        <div className="menu-head-arrow"></div>
                    </Link>
                    <div className="menu-head-title">Menu</div>
                </div>
            </div>
            <div className="menu-content">This is menu content</div>
        </div>
    );
};

export default MenuPage;
