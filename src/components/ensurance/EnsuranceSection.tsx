import CheckBox from '../check-box/CheckBox';
import { IEnsuranceInput } from './interface';
import './ensurance-section.css';

export default function EnsuranceSection(props: IEnsuranceInput): JSX.Element {
  return (
    <div className='ensurance'>
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
