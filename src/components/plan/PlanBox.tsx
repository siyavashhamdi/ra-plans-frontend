import CheckBox from '../check-box/CheckBox';
import { IPlanBox } from './interface';
import './plan-box.css';

function PlanBox(props: IPlanBox): JSX.Element {
  const priceFormatted = props.price === 0 ? '0K' : `$${ Math.round(props.price / 1000) }K`;

  return (
    <div
      className={`plan-box${ props.selected ? ' plan-box-active' : '' }`}
      onClick={(ev) => props.onClick && props.onClick(ev, props.id)}>
      <div className='plan-box-container'>
        <div className='check-box-holder'>
          <CheckBox checked={props.selected} />
        </div>
        <div className='plan-info'>
          <div className='plan-base'>
            <div className='plan-title'>{props.title}</div>
            <div className='plan-price'>{priceFormatted}</div >
          </div>
          <ul>
            {props.descriptions.map((desc: any, id: number) => <li key={id}>{desc}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlanBox;
