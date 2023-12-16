import SellingPoint from "../SellingPoint/SellingPoint";
import "./SellingPoints.css";

const SellingPoints = () => {
  const sellingPointsData = [
    {
      title: "Highly compatible",
      text: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
    },
    {
      title: "Wireless with bluetooth",
      text: "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
    },
    {
      title: "high capacity battery",
      text: "Equipped with a long-lasting built-in battery, you'll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
    },
    {
      title: "rgb backlit modes",
      text: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.",
    },
  ]

  return (
    <div
      className="Selling-Points"
    >
      {sellingPointsData.map((sellingPoint, index) => {
        return (
          <SellingPoint
            key={`${sellingPoint.title}-${index}`}
            title={sellingPoint.title}
            text={sellingPoint.text}
          />
        )
      })}
    </div>
  )
}

export default SellingPoints;
