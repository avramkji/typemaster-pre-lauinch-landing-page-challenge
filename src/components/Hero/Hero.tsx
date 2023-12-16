import Button from '../Button/Button';
import  './Hero.css';
import HeroImage from '../../assets/desktop/image-keyboard.jpg';
import TitleAndText from '../TitleAndText/TitleAndText';
import Image from '../Image/Image';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='Hero-section'>
        <TitleAndText
          title='Typemaster keyboard'
          text='Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.'
          h1
        />
        <div className='Hero-Button-layer'>
          <Button
            text="Pre-order now"
            type='primary'
          />
          <div>
            <p>
              Release on 5/27
            </p>
          </div>
        </div>
      </div>
      <Image
        src={HeroImage}
        alt='hero keyboard'
        imageSize='large'
      />
    </div>
  )
}

export default Hero
