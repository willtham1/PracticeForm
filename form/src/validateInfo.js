export default function validateInfo(values) {
    let errors = {}

        //firstname
        if(!values.firstname.trim()) {
            errors.firstname = 'First Name required!';
        }
    
        //lastname
        if(!values.lastname) {
            errors.lastname = 'Last Name required!';
        } 

        //companyname
        if(!values.companyname.trim()) {
            errors.companyname = 'Company Name required!';
        }

        //phonenumber
        if(!values.phonenumber.trim()) {
            errors.phonenumber = 'Phone Number required!';
        }

        //email
        if(!values.email.trim()) {
            errors.email = 'Email required!';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }
    return errors;
}