import React from 'react';
import { Link } from "react-router-dom"
import Basket from "../../routes/basket"

const Header = ({ count,  }) =>{
    return(
            <header>
                <div className="Header">
                    <div className="Left-content">
                        <Link to={"/"}>
                            <a href="">
                                <h4>World Peas</h4>
                            </a>
                        </Link>
                    </div>
                    <div className="Right-content">
                        <ul>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                            <li>Newstand</li>
                            <li>Who we are</li>
                            <li>My Profile</li>
                            <Link to="/basket">
                                <li id="basket"><span data-items={count}>Basket</span></li>
                            </Link>
                        </ul>
                    </div>
                </div>
                
            </header> 
    )
}

export default Header