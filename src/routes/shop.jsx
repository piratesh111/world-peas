import { Fragment } from "react"
import Header from "../components/layout/Header"
import ListItem from "../components/listItem"
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate} from "react-router-dom";


const Shop = () =>{
    const[presentItems, setPresentItems] = useState(()=>{
        const savedPresentItems = localStorage.getItem('presentItems')
        return savedPresentItems ? JSON.parse(savedPresentItems): [];
    })
    const navigate = useNavigate();
    const handleAddItem = item => {
        if (!presentItems.some(presentItem => presentItem.id === item.id)) {
            
            setPresentItems([...presentItems, item]);
        }
    };
    const handleRemoveItem = id => {
        setPresentItems(prev => prev.filter(item => item.id !== id));
    };
    const [items, setItem] = useState([])
    useEffect(()=>{
        axios.get('https://world-peas-8f1fa-default-rtdb.firebaseio.com/items.json').
        then(response =>{
            const data = response.data
            const transformedData = data.map((item,index)=>{
                return{
                    ...item,
                    id:index
                }
            })
            setItem(transformedData)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])
    useEffect(()=>{
        
        localStorage.setItem('presentItems', JSON.stringify(presentItems))
    }, [presentItems])
    return(
        <Fragment>
            <Header count={presentItems.length}  ></Header>
            <div className="shop-container">
                <div className="page-heading">
                    <h3>Produce</h3>
                    <span>fresh - August 21, 2024</span>
                </div>

                    <div className="product-list-wrapper">
                        {
                            items.map(item =>{
                                return (<ListItem onAddItem={() => handleAddItem(item)} onRemove={handleRemoveItem}  
                                isInCart={presentItems.some(presentItem => presentItem.id === item.id)}
                                    key={item.id} data={item}></ListItem>)
                            })
                        }
                    </div>
                    {presentItems.length > 0 && (
                    <div className="To-Hide">
                        <button onClick={() => navigate('/basket', { state: { presentItems } })}>Go to Basket</button>
                    </div>
                )}  
            </div>
        </Fragment>
    ) 
}

export default Shop 