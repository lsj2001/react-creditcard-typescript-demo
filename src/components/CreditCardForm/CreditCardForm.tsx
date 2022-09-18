//###########################################################
// create date: 2022-09-18
// author : Ryan Ling
// describe: This conponents is a Credit Card Form use "react-cardit-card" library
// todo: 1.find a better credit-card pic library or code myself
//       2.cardName only use letter
//       3.improve expire date logic
//       4.check input data when change focus
//       5.tidy up the logic code
//       6.in the mobile version, the numeric keypad pops up where only numbers can be entered
//       7.more test logics to test
//       8.user redux to state management
//###########################################################

import React from "react";
import useForm from "./useForm";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const CreditCardForm: React.FC = () => {
    const {
        handleChange,
        handleFocus,
        handleSubmit,
        handleNumberChange,
        values,
        errors,
    } = useForm();

    return (
        <div className="container">
            <div className="box justify-content-center align-items-center">
                <div className="form-div">
                    <div className="credit-card">
                        <Cards
                            cvc={values?.cvc}
                            expiry={values?.expiration}
                            focused={values?.focus}
                            name={values?.name}
                            number={values?.number}
                        />
                        <div className="input-container">
                            <input
                                data-testid="cardName"
                                className="input-normal"
                                type="text"
                                id="name"
                                name="name"
                                autoCorrect="off"
                                placeholder="Cardholder Name"
                                value={values.name}
                                onFocus={handleFocus}
                                onChange={handleChange}
                            />
                            <div className="creditcard-errors">
                                {errors.name && errors.name}
                            </div>
                            <input
                                data-testid="cardNumber"
                                className="input-normal"
                                type="text"
                                maxLength={16}
                                id="number"
                                name="number"
                                placeholder="Card Number"
                                value={values.number}
                                onFocus={handleFocus}
                                onChange={handleNumberChange}
                            />
                            <div className="creditcard-errors">
                                {errors.number && errors.number}
                            </div>
                            <div className="creditcard-dateandcvc">
                                <div className="creditcard-date">
                                    <input
                                        data-testid="cardMonth"
                                        className="input-date"
                                        type="text"
                                        maxLength={2}
                                        id="month"
                                        name="month"
                                        placeholder="MM"
                                        value={values.month}
                                        onFocus={handleFocus}
                                        onChange={handleNumberChange}
                                    />
                                    <span className="creditcard-date-middle">/</span>
                                    <input
                                        data-testid="cardYear"
                                        className="input-date"
                                        type="text"
                                        maxLength={2}
                                        id="year"
                                        name="year"
                                        placeholder="YY"
                                        value={values.year}
                                        onFocus={handleFocus}
                                        onChange={handleNumberChange}
                                    />
                                </div>

                                <input
                                    data-testid="cardCvc"
                                    type="text"
                                    id="cvc"
                                    name="cvc"
                                    maxLength={4}
                                    placeholder="CVC"
                                    autoComplete="cc-csc"
                                    autoCorrect="off"
                                    value={values.cvc}
                                    onFocus={handleFocus}
                                    onChange={handleNumberChange}
                                    inputMode="numeric"
                                />
                            </div>

                            <div className="creditcard-errors">
                                {errors.cvc && errors.cvc}
                            </div>
                            <button
                                className="creditcard-submit"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCardForm;
