import React, { Component } from 'react';
import './SubmitTravel.css'
import {Link} from 'react-router-dom'

export default class SubmitTravel extends Component{
    render(){
        return(
            <div className='container'>
                <div className="conttext">Choose what info you want to share</div>
             <div className="ButCon">
             <Link to="/pnr"><button className="But loginBut" primary>Transport</button></Link>
             <Link to="/accomodation"><button secondary className="But signupBut">Accomodation</button></Link>
             <Link to="/others"><button secondary className="But signupBut">Others</button></Link>
             </div>
             </div>
        )
    }
}