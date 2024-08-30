import { Fragment } from "react"
import jhonatan from  "../../assets/jhonatan-kemper.png"
import stocksy from "../../assets/Stocksy.png"
import { Link } from "react-router-dom"


const Body = () => {
    return(
        <Fragment>
            <div className="main-page-layout">
            <div className="sub-header-text">
                    <p>We`re farmers, purveyors and eaters of</p>
                    <p>organically grown food.</p>
                     <Link to={`/shop`}><button>Browse our shop</button></Link> 
            </div>
                <div className="images-container">
                    <div className="images-container_left">
                        <img src={jhonatan}></img>
                    </div>
                    <div className="images-container_right">
                        <img src={stocksy}></img>
                        <small id="stocksy-description"><b>Central California</b> - The person who grew these was located in Central California and, er, hopefully very well-compensated.</small>
                    </div>
                </div>
                <div className="text-under-image">
                    <div className="left-text-under-image">
                        <h5>WHAT WE BELIVE</h5>
                    </div>
                    <div className="right-text-under-image">
                        <p> <h5>We believe in produce. Tasty produce. Produce like:</h5>

                            Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. 
                            Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem 
                            artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. 
                            Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill. 

                            <h5>What are we forgetting?</h5>

                            Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, 
                            in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. 
                            Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. 
                            Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. 
                            Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. 
                            Chives. Corn. Endive. Escarole, which, we swear, we're vendors of organic produce,
                            but if you asked us to describe what escaroles are...
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Body