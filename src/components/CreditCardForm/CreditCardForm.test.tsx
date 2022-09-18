import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CreditCardForm from "./CreditCardForm";

test("renders input", () => {
    render(<CreditCardForm />);
    const input = screen.getByTestId("cardName");
    expect(input).toBeTruthy();
});

test("Credit card field can only use any number", () => {
    render(<CreditCardForm />);
    const input = screen.getByTestId("cardNumber");
    const inputNumber = 12345;
    fireEvent.change(input, { target: { value: inputNumber } });
    expect(Number((input as HTMLInputElement).value)).toBe(inputNumber);
    const inputText = "ryan";
    fireEvent.change(input, { target: { value: inputText } });
    expect((input as HTMLInputElement).value).toBe("");
});

test("Expired Month field can only use any number and can not more than 12", () => {
    render(<CreditCardForm />);
    const input = screen.getByTestId("cardMonth");
    const inputNumber = 12;
    fireEvent.change(input, { target: { value: inputNumber } });
    expect(Number((input as HTMLInputElement).value)).toBe(inputNumber);
    const inputNumber1 = 13;
    fireEvent.change(input, { target: { value: inputNumber1 } });
    expect(Number((input as HTMLInputElement).value)).toBe(inputNumber);
    const inputText = "ryan";
    fireEvent.change(input, { target: { value: inputText } });
    expect((input as HTMLInputElement).value).toBe("");
});

test("Expired Year field can only use any number and can not less than 22", () => {
    render(<CreditCardForm />);
    const input = screen.getByTestId("cardYear");
    const inputNumber = 22;
    fireEvent.change(input, { target: { value: inputNumber } });
    expect(Number((input as HTMLInputElement).value)).toBe(inputNumber);
    const inputNumber1 = 21;
    fireEvent.change(input, { target: { value: inputNumber1 } });
    expect(Number((input as HTMLInputElement).value)).toBe(inputNumber);
    const inputText = "ryan";
    fireEvent.change(input, { target: { value: inputText } });
    expect((input as HTMLInputElement).value).toBe("");
});

test("Credit Cvc field can only use any number", () => {
    render(<CreditCardForm />);
    const input = screen.getByTestId("cardCvc");
    const inputNumber = 123;
    fireEvent.change(input, { target: { value: inputNumber } });
    expect(Number((input as HTMLInputElement).value)).toBe(inputNumber);
    const inputText = "ryan";
    fireEvent.change(input, { target: { value: inputText } });
    expect((input as HTMLInputElement).value).toBe("");
});
