import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreditCardForm from "../../components/CreditCardForm/CreditCardForm";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Card.css";

export interface ICardProps { }

const Card: React.FunctionComponent<ICardProps> = (props) => {
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
            <div className="card-head">
                <div className="card-head-container">
                    <Link to={"/menu?name=" + userName}>
                        <div className="card-head-burger"></div>
                    </Link>
                    <div className="card-head-title">Register card form</div>
                </div>
            </div>
            <div className="card-content">
                Welcome,<span className="card-content-name">{userName}</span>
            </div>
            <CreditCardForm />
        </div>
    );
};

export default Card;
