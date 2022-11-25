import {useState} from 'react';

const Filter = ({onFilterSelect}) => {
    const filterButtons = [
        {name: 'all', label: 'All'}, 
        {name: 'open', label: 'Open'}, 
        {name: 'pending', label:'In Progress'}, 
        {name: 'completed', label:'Done'}, 
        {name: 'byUpdate', label:'By Update(newest)'}
    ];
    const [active, setActive] = useState('all');
    const handleActive = (e) => {
        setActive(e.currentTarget.name);
        onFilterSelect(e.currentTarget.name);
    }
  return (
    <div className='filter mt-10 min-w-[520px] flex flex-row justify-center items-center'>
        <h1 className='mr-2'>Filter: </h1>
        {filterButtons.map((btn) => {
          const FilterButton = () => {
            return (
              <button name={btn.name} onClick={handleActive} className={active === btn.name ? 'active' : ''}>{btn.label}</button>
            )
          }
          return (
            <FilterButton 
              key={btn.name}/>
          )
        })}
    </div>
  )
}

export default Filter