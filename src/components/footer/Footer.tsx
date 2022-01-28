import Button from '../button/Button';
import { IFooterInput } from './interface';
import { moneyThousandSeparator } from '../../helper/common-helper';
import './footer.css';

export default function Footer(props: IFooterInput): JSX.Element {
  const handleBtnClick = () => {
    alert('Not-Implemented!');
  }

  return (
    <div className='footer button-container'>
      <Button text='CONTINUE' onClick={handleBtnClick} />
      <div className='plan-info-container'>
        <div>{props.planTitle}</div>
        <div>
          <div className='plan-price'>${ moneyThousandSeparator(props.planPrice) }</div>
          <div>CAD</div>
        </div>
      </div>
    </div>
  );
}
