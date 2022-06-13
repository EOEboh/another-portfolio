import React, { useState } from 'react';
import axios from 'axios';
import { Container, Input, Label, Text } from '../components/Contact/ContactStyles';
import Button from '../styles/GlobalComponents/Button';

const Form = () => {
    // for setting form submit status
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
    //   for setting form inputs
      const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleServerResponse = (ok, msg) => {
        if (ok) {
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg },
          });
          setInputs({
            name: '',
            email: '',
            message: '',
          });
        } else {
          setStatus({
            info: { error: true, msg: msg },
          });
        }
      };

      const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
          ...prev,
          [e.target.id]: e.target.value,
        }));
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
      };
      const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
          method: 'POST',
          url: 'https://formspree.io/f/xknyvqjg', // Formspree
          data: inputs,
        })
          .then((response) => {
            handleServerResponse(
              true,
              'Thank you for reaching out. I would surely get back to you. 😊',
            );
          })
          .catch((error) => {
            handleServerResponse(false, error.response.data.error);
          });
      };

  return (
      <>
    <Container 
    onSubmit={handleOnSubmit}>
            <Label htmlFor="name">
              {" "}
              Your Name
            </Label>
            <Input
              id='name'
              type="text"
              name="_replyto"
              required
              onChange={handleOnChange}
              placeholder='John Smith'
              value={inputs.name}
            />
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              id='email'
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              placeholder='example@gmail.com'
              required
              value={inputs.email}
            />
            <Label
              htmlFor="message"
            >
              Message
            </Label>
            <Text
              rows="4"
              id='message'
              name='message'
              placeholder='Type details here'
              required
              onChange={handleOnChange}
              value={inputs.message}
            />
            <Button
              disabled={status.submitting}
              type="submit"
            >
         {!status.submitting
            ? !status.submitted
              ? 'Send Message 😎'
              : 'Message Sent 😊'
            : 'Sending... 😶'}
            </Button>
          </Container>
             {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && (<p>
                  {status.info.msg}
               </p>)}
        </>
  )
}

export default Form