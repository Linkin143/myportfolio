import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "./Form.css";




const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  console.log(name, email, subject, message);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const addUser = { name, email, subject, message };

    const response = await fetch("https://myportfolio-r690.onrender.com/api/", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": 'application/json',
      },
    })
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      console.log(result.error)
      setError(error);

    }
    if (response.ok) {
      console.log(result);
      setError("");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      
      setTimeout(() => {
        swal({
          title: 'Thanks! for contacting us.',
          text: 'Will connect you shortly!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }, 1000);


      setTimeout(async () => {
        const response = await fetch("https://myportfolio-r690.onrender.com/api/mail", {
          method: "GET",
        });
        const result = await response.json();
        console.log(result);



      }, 1000);

      navigate("/contact")

    }



  }















  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Your Name*</label>
        <input required={true} type='text' placeholder='Enter your name' value={name} onChange={(event) => setName(event.target.value)}></input>
        <label>Email*</label>
        <input required={true} type='email' placeholder='Type your email' value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <label>Subject*</label>
        <input required={true} type='text' placeholder='Type your subject' value={subject} onChange={(event) => setSubject(event.target.value)}></input>
        <label>Message</label>
        <textarea rows="6" placeholder='Type your message here' value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
        <button className='btn'>Submit</button>
      </form>

    </div>
  )
}

export default Form
