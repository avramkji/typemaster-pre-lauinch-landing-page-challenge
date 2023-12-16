import { createElement } from 'react';
import './TitleAndText.css';

interface TextAndTitleProps {
  title: string;
  text: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
}

const TitleAndText = ({ title, text, h1, h2, h3 }: TextAndTitleProps) => {
  let titleType;
  if (h1) { // fuck it, let's do it like this for now, will modify later. brain no thinky
    titleType = 'h1';
  } else if (h2) {
    titleType = 'h2';
  } else if (h3) {
    titleType = 'h3';
  } else {
    titleType = 'h1'; // default to h1 if none is provided
  }

  const Title = createElement(titleType, {}, title);

  return (
    <div className='TitleAndText'>
      {Title}
      <p>
        {text}
      </p>
    </div>
  );
};

export default TitleAndText;