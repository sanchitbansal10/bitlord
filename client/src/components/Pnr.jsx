import React, {Component} from 'react'
import './Pnr.css'

class Pnr extends Component{
    constructor(props){
        super(props)
        this.state={
            pnr:''
        }
        this.onSubmit=this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({pnr:e.target.value})
    }
    onSubmit(){
        this.props.pnrProp(this.state.pnr)
    }
    render(){
        return(
            <div className="pnrSet">
                <div>Just provide the PNR and we w'll get the rest info</div>
                <input type='text' value={this.state.pnr} onChange={this.onChange.bind(this)}/>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}

export default Pnr