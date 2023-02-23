import Image from 'next/image'
import { kurage_logo } from '../../index'
import "./login.scss"

function page() {
  return (
    <div className="wrapper">
        <div className='video_div'>
        <video
            className="back_video"
            autoPlay
            playsInline
            loop={true}
            muted={true}
            poster=""

          >
            <source src="./i.mp4" type="video/mp4" />
          </video>
        </div>
         <div className='inner_div'>
        <div className="inner">
            <Image className='Kurage_logo' src={kurage_logo} alt="Kurage_logo"/>
            <h1 className='welcome_font'>Welcome To QuotifyPro</h1>

        </div>
         </div>
      </div>
  )
}

export default page