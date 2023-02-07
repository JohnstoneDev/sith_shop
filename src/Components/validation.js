

function validation(values) {
 let error = {}
 const email_pattern = /~!@#$%^&*/
 const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-ZA0-9]{8,}$/

if(values.email === ""){
    error.email = "Name should not be empty"
}
if (!email_pattern.test(values.email)){
    error.email = "Email didn't match"
}
if (values.password === ""){
    error.password = "Password should not be empty"
}
if (!password_pattern.test(values.password)){
    error.password = "Password didn't match"
}
if (values.confirm_password === "" || values.confirm_password !== values.password){
    error.confirm_password = "Password not matched"
}

return error;
}

export default validation
