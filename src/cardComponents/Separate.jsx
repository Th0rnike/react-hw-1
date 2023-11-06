import ether from '../images/icon-ethereum.svg'
import clock from '../images/icon-clock.svg'

export default function Separate(){
    return (
        <div className='separate'>
            <span className='left'><img src={ether} alt="" />0.041 ETH</span>
            <span className='right'><img src={clock} alt="" />3 days left</span>
        </div>
    )
}