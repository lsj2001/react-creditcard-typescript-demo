import { useState } from "react";
import validateInfo from "./validateInfo";

interface CreditCardErrors {
    name?: string;
    number?: number | string;
    expiration?: number | string;
    cvc?: number | string;
}

const useForm = () => {
    const [values, setValues] = useState({
        name: "",
        number: "",
        month: "",
        year: "",
        expiration: "",
        cvc: "",
        focus: undefined,
    });

    const [errors, setErrors] = useState<CreditCardErrors>({
        name: "",
        number: "",
        expiration: "",
        cvc: "",
    });

    const handleFocus = (event: any) => {
        setValues({
            ...values,
            focus: event.target.name,
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setValues({
            ...values,
            [name]: value,
        });
        setErrors({
            name: "",
            number: "",
            expiration: "",
            cvc: "",
        });
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        const newNumber = parseInt(e.target.value);
        if (Number.isNaN(newNumber)) {
            if (name === "month") {
                setValues({
                    ...values,
                    month: "",
                    expiration:
                        parseInt(values.year) > 9
                            ? "00" + values.year
                            : values.year && parseInt(values.year) < 10
                                ? "000" + String(values.year)
                                : "",
                });
            } else if (name === "year") {
                setValues({
                    ...values,
                    year: "",
                    expiration:
                        parseInt(values.month) > 9
                            ? values.month
                            : values.month && parseInt(values.month) < 10
                                ? "0" + String(values.month)
                                : "",
                });
            } else {
                setValues({
                    ...values,
                    [name]: "",
                });
            }
        } else {
            if (name === "month") {
                if (newNumber > 12) {
                    return;
                }
                const newyear =
                    parseInt(values.year) > 9
                        ? values.year
                        : values.year && parseInt(values.year) < 10
                            ? "0" + String(values.year)
                            : "";
                setValues({
                    ...values,
                    month: String(newNumber),
                    expiration:
                        newNumber > 9
                            ? String(newNumber) + newyear
                            : "0" + String(newNumber) + newyear,
                });
            } else if (name === "year") {
                if (newNumber < 22 && newNumber > 9) {
                    return;
                }
                const newMonthData =
                    parseInt(values.month) > 9
                        ? values.month
                        : values.month && parseInt(values.month) < 10
                            ? "0" + String(values.month)
                            : "00";
                const newExpiration =
                    newNumber > 9
                        ? newMonthData + String(newNumber)
                        : newMonthData + "0" + String(newNumber);
                setValues({
                    ...values,
                    year: String(newNumber),
                    expiration: newExpiration,
                });
            } else {
                setValues({
                    ...values,
                    [name]: newNumber,
                });
            }
        }
        setErrors({
            name: "",
            number: "",
            expiration: "",
            cvc: "",
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors(validateInfo(values));
        const { cvc, name, number } = validateInfo(values);
        if (!cvc && !name && !number) {
            console.log(values);
            alert(
                "Success!                  Cardholder Name:" +
                values.name +
                "   Card Number:" +
                values.number +
                "   Expire Date:" +
                values.month +
                "/" +
                values.year +
                "   Cvc:" +
                values.cvc
            );
            setValues({
                name: "",
                number: "",
                month: "",
                year: "",
                expiration: "",
                cvc: "",
                focus: undefined,
            });
        }
    };

    return {
        handleChange,
        handleFocus,
        handleSubmit,
        handleNumberChange,
        values,
        errors,
    };
};

export default useForm;
