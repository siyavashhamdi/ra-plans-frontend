import CheckBox from '../check-box/CheckBox';
import { IAssuranceInput as IAssuranceInput } from './interface';
import './assurance-section.css';

export default function Assurance(props: IAssuranceInput): JSX.Element {
  return (
    <div className='assurance'>
      <div className='overlay-back' />
      <div className='overlay'>
        {props.descriptions.map((desc, id: number) => (
          <div key={id} className='desc-holder'>
            <span className='check-box-assurance'>
              <CheckBox checked checkedBgTransparent sizePx={35} />
            </span>
            <span>{desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
