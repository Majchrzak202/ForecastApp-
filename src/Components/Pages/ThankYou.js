import React from "react";
import './ThankYou.css'

const ThankYou = () => {
    console.log('Thx')
    return (<div className='submited'>
        <h2>Thank's for reaching out</h2> 
        <p>Someone will contact you as soon as it possible!</p>
    </div>)
}

export default React.memo(ThankYou); 