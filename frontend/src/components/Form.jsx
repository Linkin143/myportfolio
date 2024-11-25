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

    const response = await fetch("http://localhost:4000/", {
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
      setError(result.error);

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
        const response = await fetch("http://localhost:4000/mail", {
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
        <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input>
        <label>Email*</label>
        <input type='email' value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <label>Subject*</label>
        <input type='text' value={subject} onChange={(event) => setSubject(event.target.value)}></input>
        <label>Message</label>
        <textarea rows="6" placeholder='Type your message here.' value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
        <button className='btn'>Submit</button>
      </form>

    </div>
  )
}

export default Form