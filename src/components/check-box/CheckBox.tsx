import { ICheckBox } from './interface';
import './check-box.css';

function CheckBox(props: ICheckBox): JSX.Element {
  const style = {
    height: `${ (props.sizePx || 25) }px`,
    width: `${ (props.sizePx || 25) }px`,
    backgroundImage: props.checked ? 'url(images/check-fill.svg)' : '',
    backgroundColor: props.checked && !props.checkedBgTransparent ? 'black' : '',
  };

  return (
    <span className='check-box' style={style}>
    </span >
  );
}

export default CheckBox;
