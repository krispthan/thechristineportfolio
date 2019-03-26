import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { sendContactForm } from '../../actions/index';
import { connect } from 'react-redux';
import profile from '../../assets/images/profile.png';
import contactcard from '../../assets/images/contactcard.png';


 class SignInForm extends Component {
   state= {
     messageSent: false,
   }
    submitHandler = (values) =>{
      this.props.sendContactForm(values)
      return values;
    }
   render(){
    const { handleSubmit, onSubmit } = this.props;

    return (

        <div className="contact-wrapper">
          <div className="contact-bkg"></div>
          <div className="contact-filter"></div>
          <div id="particles-js"></div>
          <div className="row">
          <div className="col contact-left">
          <div className="contact-form-box">
             <h1>Contact</h1>
             <hr/>
             <form onSubmit={handleSubmit(this.submitHandler)} className="form">
                    <div className="field">
                    <div className="control">
                      <Field name="firstName" component={renderField} type="text" label="First Name" />
                     </div>
                  </div>
              
                    <div className="field">
                      <div className="control">
                      <Field name="lastName" component={renderField} type="text" label="Last Name"/>
                    </div>
                  </div>
            
            
                <div className="field">
                    <div className="control">
                      <Field name="email" component={renderField} type="email" label="Email Address" />
                    </div>
                </div>

                <div className="field">
                  <div className="control">
                    <Field name="phone" component={renderField} type="phone" label="Phone Number" />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="label">Message</label>
                    <Field className="textarea" name="message" label="Message" component="textarea" />
                  </div>
                </div>
            
                <div className="field">
                  <div className="control">
                    <button className="button is-link" type='submit'>Submit</button>
                  </div>
              </div>
        </form>
        </div>
        </div>
        <div className="col contact-right">
        <div className="card middle">
          <div className="front">
            <img id="profile-img" src={profile} alt=""/>
          </div>
          <div className="back">
            <img id="contact-card" src="profile-img" src={contactcard} alt=""/>
            <div className="back-content-middle">
              <h2>Contact Me</h2>
              <h3>Christine Than</h3>
              <div className="sm">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fas fa-phone-square"></i></a>
              </div>
            </div>
          </div>
        </div> 
       </div>   
    </div>
    <script src="./particles.min.js"></script>
 </div>
    )}
  };
  
  // const validate = val => {
  //   const errors = {};
  //   if (!val.firstName) {
  //     console.log('First Name is required');
  //     errors.firstName = 'Required';
  //   }
  //   if (!val.lastName) {
  //     console.log('Last Name is required');
  //     errors.lastName = 'Required';
  //   }
  //   if (!val.email) {
  //     console.log('email is required');
  //     errors.email = 'Required';
  //   } else if (!/^.+@.+$/i.test(val.email)) {
  //     console.log('email is invalid');
  //     errors.email = 'Invalid email address';
  //   }
  //   return errors;
  // };
  
  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <div className="control">
        <label className="field">{label}</label>
        <input className="input" {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>

  )
  // SignInForm = reduxForm({
  //   form: 'signIn',
  //   validate,
  // })(SignInForm);
  
  // const mapStateToProps = state => {
  //   return {
  //     SignInForm: state.form
  //   }
  // }

  // export default connect(mapStateToProps, { sendContactForm})(SignInForm);




  SignInForm = reduxForm({
    form: 'contact_form',
  })(SignInForm) ;

const mapStateToProps = state => {
  return {
    contact_form: state.form
  }
}

export default connect(mapStateToProps, { sendContactForm })(SignInForm); 