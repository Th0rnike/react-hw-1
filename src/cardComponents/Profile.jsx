import avatar from '../images/image-avatar.png'

export default function Profile(){
    return(
        <div id="profile">
            <img className='avatar' src={avatar} alt="" />
            <p>Creation of <span id='name'>Jules Wyvern</span></p>
        </div>
    )
}