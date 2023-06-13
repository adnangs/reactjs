
import React from 'react';
//import AdvancedForm from './hooks/advancedForm';
import UseRefExp from './hooks/UseRefExp';

//import EmployeeTable from './Table/employeeTable';
//import UseStateExp from './hooks/useStateExp';
//import UseEffectExp from './hooks/useEffectExp';
//import ProgrmmingJokes from './hooks/programmingJokes';
//import UseCleanup from './hooks/useCleanup';
//import BasicForm from './hooks/basicForm';

function App() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          Hello, React!</h1>
        {/* <UseStateExp /> */}
        {/* <UseEffectExp /> */}

        {/* <ProgrmmingJokes /> */}
        {/* <UseCleanup /> */}
        {/* <BasicForm /> */}
        {/* <AdvancedForm /> */}
        <UseRefExp />
      </div>
    </section>
  )

}

export default App