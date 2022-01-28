import { IButton } from './interface';
import './button.css';

function Button(props: IButton): JSX.Element {
  return (
    <div
      className='button'
      onClick={(ev) => props.onClick && props.onClick(ev)}>
      <span>{props.text}</span>
    </div >
  );
}

export default Button;
