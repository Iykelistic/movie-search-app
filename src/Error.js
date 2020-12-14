import React from 'react';
import './Error.css';
import {Link} from 'react-router-dom';
class Error extends React.Component{
    
    render(){
        return(
            <div className="ref">
                <div className="main">
                    <div className="main__content">
                        <div className="main__info">
                            <h1> 
                            <span className="blue">O</span> 
                            <span className="red">O</span> 
                            <span className="orange">P</span> 
                            <span className="yellow">S</span> 
                            <span className="green">!</span>
                            </h1>
                            <h2> 404 page not found</h2>
                            <p>This Is Not The Web Page You're Looking For.</p>
                            <Link to='/' className="back">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Error;