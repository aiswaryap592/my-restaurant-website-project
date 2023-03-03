import './Home.css';
import { Link } from 'react-router-dom';
const Home=()=>{
    return(
        <div className="home">
            <div className="headContainer">
            <h1>Pedro's Pizzeria</h1>
            <p>PIZZA TO FIT ANY TASTE</p>
            <Link to="/menu">
                <button>Order Now</button>
            </Link>
            </div>
        </div>
    )
}
export default Home;