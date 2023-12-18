import Image from '../Image/Image';
import TitleAndText from '../TitleAndText/TitleAndText';
import './Main.css';
import PhoneAndKeyboardImage from '../../assets/desktop/image-phone-and-keyboard.jpg'
import ImageGlassAndKeyboard from '../../assets/desktop/image-glass-and-keyboard.jpg'

const Main = () => {
  return (
    <div className="Main">
      <div className='Main-image-container'>
        <Image
          src={PhoneAndKeyboardImage}
          alt='phone and keyboard'
          imageSize='small'
          overlayColor
        />
        <Image
          src={ImageGlassAndKeyboard}
          alt='glass and keyboard'
          imageSize='medium'
        />
      </div>
      <TitleAndText 
        h2
        title='Mechanical wireless keyboard'
        text='The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with realiable wireless connectivity.'
      />
    </div>
  );
}

export default Main;
