import { Zoom } from '@mui/material';
import React from 'react';


export const FormErrors = ({formErrors}) =>

validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'songs_name':
        songs_nameValid = value.match(A-Z,a-z);
        fieldValidationErrors.songs_name = songs_nameValid ? '' : ' is invalid';
        break;
      case 'songs_artists':
        songs_artistValid = value.length >= 6;
        fieldValidationErrors.songs_artist = songs_artistValid ? '': ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }
  


  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>