import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormBasic = ( {submitForm} ) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);


  return (
    <div className='form-content-right'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>
                Please input the following information!
            </h1>
            <div className='form-inputs'>
                <label htmlFor='firstname' className='form-label'>
                    First Name
                </label>
                <input 
                    id='firstname'
                    type='text'  
                    name='firstname'
                    className='form-input'
                    placeholder='Enter your First Name.'
                    value={values.firstname}
                    onChange={handleChange}
                />
                {errors.firstname && <p>{errors.firstname}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='lastname' className='form-label'>
                    Last Name
                </label>
                <input 
                    id='lastname'
                    type='text'  
                    name='lastname'
                    className='form-input'
                    placeholder='Enter your Last Name.'
                    value={values.lastname}
                    onChange={handleChange}
                />
                {errors.lastname && <p>{errors.lastname}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='companyname' className='form-label'>
                    Company Name
                </label>
                <input 
                    id='companyname'
                    type='text' 
                    name='companyname'
                    className='form-input'
                    placeholder='Enter your Companys Name.'
                    value={values.companyname}
                    onChange={handleChange}
                />
                {errors.companyname && <p>{errors.companyname}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='phonenumber' className='form-label'>
                    Phone Number
                </label>
                <input 
                    id='phonenumber'
                    type='text'  
                    name='phonenumber'
                    className='form-input'
                    placeholder='Enter your Phone Number.'
                    value={values.phonenumber}
                    onChange={handleChange}
                />
                {errors.phonenumber && <p>{errors.phonenumber}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='email' className='form-label'>
                    Email Address
                </label>
                <input 
                    id='email'
                    type='text'  
                    name='email'
                    className='form-input'
                    placeholder='Enter your Email.'
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <button className='form-input-btn'
            type='submit'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default FormBasic