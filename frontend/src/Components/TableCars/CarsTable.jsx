import { useSelector } from "react-redux";

import TableBox from "./styles";
import Table from "../../ui/Table/Table";
import CarsHead from './CarsHead/CarsHead';
import CarsBody from "./CarsBody/CarsBody";
import CarsFooter from "./CarsFooter/CarsFooter";



const CarsTable = () => {
  const { list } = useSelector(({ cars }) => cars);
  return (
    <>
      <TableBox padding='3px 0'>
        <Table>
          <CarsHead />
          <CarsBody />
          <CarsFooter padding='0' />
        </Table>
      </TableBox>

    </>
  )
}

export default CarsTable;