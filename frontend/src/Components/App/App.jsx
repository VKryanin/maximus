import { useEffect } from 'react';
import s from './App.module.scss';
import { useDispatch } from 'react-redux';
import { getCars } from '../../store/carsSlice/carsSlice';
import CarsTable from '../TableCars/CarsTable';
import Header from '../Header/Header';


function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getCars())
  }, [])

  return (
    <div className={s.App}>
      <Header />
      <CarsTable />
    </div>
  );
}

export default App;
