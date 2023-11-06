import '../App.css';
import mainIMG from '../images/image-equilibrium.jpg'
import Profile from './Profile';
import Separate from './Separate';

export default function Container(){
    return(
        <div className="container">
            <img className='mainIMG' src={mainIMG} alt="" />
            <h1 className='heading'>Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <Separate />
            <hr />
            <Profile />
        </div>
    )
}