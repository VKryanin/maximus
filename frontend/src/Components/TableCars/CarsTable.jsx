import { useSelector } from "react-redux";

import TableBox from "./styles";
import Table from "../../ui/Table/Table";
import CarsHead from './CarsHead/CarsHead';
import CarsBody from "./CarsBody/CarsBody";
import CarsFooter from "./CarsFooter/CarsFooter";
import LoadingSpinner from '../../ui/LoadingSpinner'


const CarsTable = () => {
  const { list, isLoading } = useSelector(({ cars }) => cars);
  return (
    <>
      <TableBox padding='3px 0' >
        <Table forsticky='hidden'>
          <CarsHead />
          <CarsBody />
          <CarsFooter padding='0' />
        </Table>
      </TableBox>

    </>
  )
}

export default CarsTable;