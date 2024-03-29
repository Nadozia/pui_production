import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import './contactForm.css'
 
const ContactForm = () => {
    const SERVICE_ID = "service_pd8tqgi";
    const TEMPLATE_ID = "template_tuiou1d";
    const USER_ID = "hCu1la-ogLxxSr5qc";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };

    return (
        <Form className="form" onSubmit={handleOnSubmit}>
            <Form.Field
                id='form-input-control-email'
                control={Input}
                label='Email'
                name='user_email'
                placeholder='EMAIL SUCH AS ILOVEBLT@GMAIL.COM'
                required
                icon='mail'
                iconPosition='left'
            />
            <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label='Name'
                name='user_name'
                placeholder='HELLO, WHAT IS YOUR NAME?'
                required
                icon='user circle'
                iconPosition='left'
            />
            <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Message'
                name='user_message'
                placeholder='WRITE ANYTHING YOU WISH'
                required
            />
            <Button type='submit' color='green'>Submit</Button>
        </Form>
      );
    };
 
export default ContactForm;