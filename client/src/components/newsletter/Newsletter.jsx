import React from "react";
import classes from './newsletter.module.css'
import {AiOutlineSend} from 'react-icons/ai'
import newsletter from '../../assets/get-newsletter.svg'

const Newsletter = () => {
    return(
       <section id="contacts" className={classes.container}>
          <div className={classes.wrapper}>
             <h4 className={classes.subtitle}>Get our latest offers</h4>
             <h2 className={classes.title}>Newsletter</h2>
             <div className={classes.inputContainer}>
                <input type="text" placeholder="Enter email...." />
                <AiOutlineSend className={classes.sendIcon}/>
             </div>
             <img src={newsletter} alt="" className={classes.illustration}/>
          </div>
       </section>
    )
}

export default Newsletter