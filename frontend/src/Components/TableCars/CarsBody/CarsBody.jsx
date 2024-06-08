import { useSelector, useDispatch } from "react-redux";
import TableBody from "../../../ui/Table/TableBody/TableBody";
import CarsRow from "../CarsRow/CarsRow";
import Text from '../../../ui/Text';
import { useEffect } from "react";
import { getCars } from '../../../store/carsSlice/carsSlice'
import LoadingSpinner from "../../../ui/LoadingSpinner";

const CarsBody = () => {
  const { list, page, pageSize } = useSelector(({ cars }) => cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedList = Array.isArray(list)
    ? list.filter((_, index) => index >= startIndex && index < endIndex)
    : [];

  return (
    <TableBody>
      {paginatedList.length ? (
        paginatedList.map((item) => (
          <CarsRow key={item._id} item={item} />
        ))
      ) : (
        <LoadingSpinner position='static' />
      )}
    </TableBody>
  );
};

export default CarsBody;