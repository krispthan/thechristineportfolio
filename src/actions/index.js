
import axios from 'axios';

export const sendContactForm = values => {
    const { firstName, lastName, phone, email, message } = values;
  
    return async dispatch => {
      const response = await axios.post('./api/contact_form.php', {
          firstName, lastName, phone, email, message
      })
  
      dispatch({
        type: 'SEND_CONTACT_FORM',
        payload: response
      })
    }
  }