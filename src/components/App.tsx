import PlanSection from './plan/PlanSection';
import Assurance from '../components/assurance/Assurance';
import Footer from './footer/Footer';

import data from '../data/plans.json';
import assurance from '../data/assurance.json';

import './app.css';
import { useState } from 'react';

function App(): JSX.Element {
  const [plan, setPlan] = useState<number | undefined>(undefined);

  const handlePlanSelect = (planId: number) => {
    setPlan(planId);
  };

  const selectedPlan = data.find(d => d.id === plan);
  const dataWithSelected = [
    ...data.map(d => {
      const isCurrDataSelected = d.id === plan;

      return { ...d, selected: isCurrDataSelected }
    })
  ];

  return (
    <div className='app'>
      <section className='identical-flex-size'>
        <PlanSection
          data={dataWithSelected}
          onClick={(_ev, planId) => { handlePlanSelect(planId) }} />
      </section>

      <aside className='identical-flex-size'>
        <Assurance descriptions={assurance} />
      </aside>

      {selectedPlan &&
        <footer>
          <Footer planTitle={selectedPlan.title} planPrice={selectedPlan.price} />
        </footer>
      }
    </div>
  );
}

export default App;
