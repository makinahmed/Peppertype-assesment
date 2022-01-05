import React from 'react';
import './Pepertype.css';
import Logo from '../img/logo.png';
import QuestionMark from '../img/questionMarkpng.png';
const Peppertype = () => {
    return (

        <>
        <div>
            <div className="logo">
                <img src={Logo} width="100%" height="auto" alt="logo" />
            </div>
        </div>
        <div className='container'>
           <div className='welcome'>
               <p className='greeting'>Hi Siva ✋</p>
               <h1>Welcome to Peppertype.ai</h1>
               <p>Congratulations on taking your first step towards creating content, the modern way!</p>
               <p>Help us tailor an amazing experience for you by answering these three questions</p>
               <button className='btn '>Skip for now</button>
               <button className='btn continue'>Continue</button> <br />
               <small className='demo'>Get the most out of it - <span className='live-link'>Book a live demo</span></small>
            </div> 
            <div className='peppertyper'>
               <div>
               <p className='peppertyper-title'>A few clicks away from an awesome writing experience</p>
                <div className='peppertyper-text'>
                    <p>50K+ Peppertypers</p>
                    <p> trust us with their content</p>
                </div>
               </div>
            </div>
        </div>
        <div className='need-help'>
            <p className='help'> <img width="12px" style={{ filter:  "brightness(0) invert(100%)"}} src={QuestionMark} alt="" /> Need Help?</p>
        </div>
        </>
    );
};

export default Peppertype;