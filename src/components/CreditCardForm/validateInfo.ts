export default function validateInfo(values: any) {
  console.log(values);
  let errors = {
    name: "",
    number: "",
    cvc: "",
  };
  var date = new Date();
  var date1 = "20" + String(values.year) + "-" + String(values.month);
  var date2 = date.getFullYear() + "-" + date.getMonth();
  var result = Date.parse(date1) >= Date.parse(date2);
  console.log(result);
  if (!values.name) {
    errors.name = "Please enter your Cardholder Nam";
  }
  if (String(values.number)?.length < 16) {
    errors.number = "Please enter valid Card Number";
  }
  if (!values.number) {
    errors.number = "Please enter your Card Number";
  }
  if (!values.month) {
    errors.cvc = "Please enter your Card Expire Date";
  }
  if (!values.year) {
    errors.cvc = "Please enter your Card Expire Date";
  }
  if (!values.cvc) {
    errors.cvc = "Please enter your Card CVC";
  }
  if (!values.year && !values.month && !values.cvc) {
    errors.cvc = "Please enter your Card Expire Date and CVC";
  }
  if (values.cvc && values.cvc < 100) {
    errors.cvc = "Please enter valid Card CVC";
  }
  if (!result) {
    errors.cvc = "Please enter valid Card Expire Date";
  }
  return errors;
}
