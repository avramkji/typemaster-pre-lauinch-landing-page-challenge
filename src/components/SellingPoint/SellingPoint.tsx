import Logo from "../Logo/Logo";
import TitleAndText from "../TitleAndText/TitleAndText";
import './SellingPoint.css';


const SellingPoint = ({title = 'Wireless', text = 'Increase your productivity with a wireless keyboard.'}) => {
  return (
    <div
      className="Selling-Point"
    >
      <Logo />
      <TitleAndText
        title={title}
        text={text}
        h3
      />
    </div>
  )
}

export default SellingPoint;
