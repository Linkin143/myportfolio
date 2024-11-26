import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "./PopupForm.css";

const PopupForm = (props) => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    console.log(name, email);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleClick = async (event) => {
        event.preventDefault();

        const addSubscriber = { name, email };

        const response = await fetch("https://myportfolio-r690.onrender.com/subscriber", {
            method: "POST",
            body: JSON.stringify(addSubscriber),
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

            
            setTimeout(() => {
                swal({
                    title: 'Thanks! for subscribing to our newsletter.',
                    text: 'Will keep you updated!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }, 1000);


            setTimeout(async () => {
                const response = await fetch("https://myportfolio-r690.onrender.com/lastsubscriber", {
                  method: "GET",
                });
                const result = await response.json();
                console.log(result);
        
        
        
              }, 1000);
        
              navigate("/")

        }



    }


    return (props.trigger) ? (
        <div className='popupform-conatiner'>
            <div className='popupform-inner'>
                <button className='popup-close-btn' onClick={() => props.setTrigger(false)}>close</button>
                {props.children}

                <div className='popup-form'>
                    <label>Name*</label>
                    <input required={true} type='text' placeholder='Enter your name' value={name} onChange={(event) => setName(event.target.value)}></input>
                    <label>Email*</label>
                    <input required={true} type='email' placeholder='Type your email here' value={email} onChange={(event) => setEmail(event.target.value)}></input>
                    <submit className="btn" onClick={handleClick}>Submit</submit>
                </div>
            </div>
        </div>
    ) : "";
}

export default PopupForm;
