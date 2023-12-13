import './Button.css';

interface ButtonProps {
  text: string;
  type?: 'primary' | 'secondary';
  linksTo?: string;
}

const Button = ({ text, type = 'primary', linksTo = '' }: ButtonProps) => {
  const className = `Button-${type}`;

  return (
    <div className={className}>
      <a href={linksTo}>{text}</a>
    </div>
  );
};

export default Button;