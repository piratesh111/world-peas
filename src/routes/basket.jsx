import { Fragment, useState, useEffect} from "react";
import { useLocation, Link} from "react-router-dom";
import gingerImage from "../assets/ginger.png";
import onionImage from "../assets/onion.png";
import tomatoImage from "../assets/tomato.png";
import Header from "../components/layout/Header"

const Basket = () => {
   
    const location = useLocation();
    const [presentItems, setPresentItems] = useState(() => {
        const savedItems = location.state?.presentItems || localStorage.getItem('presentItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });
    const [quantities, setQuantities] = useState({});
    useEffect(() => {
        const savedQuantities = JSON.parse(localStorage.getItem('quantities')) || {};
        const initialQuantities = {};
        presentItems.forEach(item => {
            initialQuantities[item.id] = savedQuantities[item.id] || 0;
        });
        setQuantities(initialQuantities);
    }, [presentItems]);
    const handleQuantityChange = (id, value) => {
        const limitedValue = value > 100 ? 100 : value;
        setQuantities(prevQuantities => {
            const newQuantities  = {...prevQuantities, [id]:limitedValue};
            localStorage.setItem('quantities', JSON.stringify(newQuantities))
            return newQuantities;
        });
    };
    const productImage = {
        onion: onionImage,
        ginger: gingerImage,
        tomato: tomatoImage
    };
    useEffect(() => {
        if (location.state?.presentItems) {
            localStorage.setItem('presentItems', JSON.stringify(location.state.presentItems));
        }
    }, [location.state?.presentItems]);
    
    const count = presentItems.length
    const calculateTotalPrice = () =>{
        return presentItems.reduce((total, item) =>{
            const quantity = quantities[item.id] || 0
            return total+(item.price * quantity)
        }, 0)
    }
    
    const values = {
        tax: 0.23,
        shipping: 4,
        taxValue: 0
    }
    return (
        <Fragment>
            <Header count={presentItems.length}></Header>
             <div className="basket-container">
                <div className="first-row-basket">
                    <h1>Basket</h1> {count!==1? `${count} - items`:`${count} - item`}  
                </div>
                {presentItems.length === 0 ? (
                    <div className="empty-basket">
                        <div className="empty-basket-layout">
                            <h2>Your basket is empty</h2>
                            <h3>Go to shop to add something</h3>
                            <Link to={"/shop"}><button>Shop</button></Link>
                        </div>
                    </div>
                ) : (
                    <div className="basket-items-checkout">
                        <div className="basket-list">
                            {presentItems.map(item => (
                                <div key={item.id} className="basket-item">
                                    <div className="img-wrapper-basket"><img src={productImage[item.name]} alt={"picture"}></img></div>
                                    <div className="basket-item-description">
                                        <h3>{item.name}</h3>
                                        <h4>${item.price} / lb</h4>
                                        <div className="input-container">
                                            <input
                                                min={0}
                                                max={100}
                                                type="number"
                                                id={`weight-${item.id}`}
                                                placeholder="Enter a weight"
                                                value={quantities[item.id]}
                                                onChange={(e) => handleQuantityChange(item.id, parseFloat(e.target.value) || 0)}
                                            /><span>lb</span>
                                        </div>
                                    </div>
                                    <div className="sub-total-item">
                                    ${item.price * quantities[item.id]}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {
                            calculateTotalPrice() > 0 ? (
                            <div className="order-summary">
                                <div className="order-summary-content">
                                    <h3>Order summary</h3>
                                    <h5>subtotal: ${calculateTotalPrice().toFixed(2)}</h5>
                                    <h5>shipping: ${values.shipping}  </h5>
                                    <h5>tax: ${values.taxValue = Math.floor(values.tax * calculateTotalPrice().toFixed(2))  }</h5> 
                                    <h4>Total: ${Math.floor(parseFloat(calculateTotalPrice().toFixed(2)) + values.shipping + values.taxValue) }</h4>
                                    <button>Continue to payment</button>
                                </div>
                            </div>) 
                            : <div></div>
                            }
                        </div>  
                )}
                
            </div> 
        </Fragment>
    );
};
export default Basket;