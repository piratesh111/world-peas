import gingerImage from "../assets/ginger.png"
import onionImage  from "../assets/onion.png"
import tomatoImage  from "../assets/tomato.png"

import { useState, Fragment } from "react"

const ListItem = ({data, onAddItem, onRemove, isInCart}) =>{

    const productImage = {
        onion: onionImage,
        ginger: gingerImage,
        tomato: tomatoImage,
    }
    
    return(
        <Fragment>
            <div  className="item-card">
                { <img className="img-fluid"src={productImage[data.name]} alt="picture"></img> }
                
                <div className="item-card__information">
                    <h6>{data.DescName}</h6>
                    <div className="item-card__information_lower">
                        <span>${data.price}/lb</span>
                        <small>{data.description}</small>
                       {
                        isInCart ? ( <button onClick={() => onRemove(data.id)}>Remove Item</button>)
                        :
                        ( <button onClick={() => onAddItem(data.id)}>Add Item to Cart</button>)

                       }
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default ListItem