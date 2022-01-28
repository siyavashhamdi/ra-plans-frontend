import PlanBox from './PlanBox';
import { IPlanSection } from './interface';
import './plan-selection.css';

function PlanSection(props: IPlanSection): JSX.Element {
  const handleClick = (ev: any, planId: number) => {
    if (props.onClick) {
      props.onClick(ev, planId);
    }
  }

  return (
    <div className='plan-section-holder'>
      <div className='plan-section-title'>Choose your plan</div>
      {props.data.map((plan => (
        <div key={plan.id} className='plan-section-plan-box'>
          <PlanBox
            id={plan.id}
            selected={plan.selected}
            title={plan.title}
            price={plan.price}
            descriptions={plan.descriptions}
            onClick={handleClick} />
        </div>
      )))}
    </div>
  );
}

export default PlanSection;
