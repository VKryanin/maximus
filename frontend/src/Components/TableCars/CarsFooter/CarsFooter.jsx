import TableFooter from "../../../ui/Table/TableFooter/TableFooter";
import Box from "../../../ui/Box";
import Text from "../../../ui/Text";
import { Pagination } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { getCars, setPage, setPageSize } from "../../../store/carsSlice/carsSlice";

const CarsFooter = () => {
  const dispatch = useDispatch();
  const { pageSize, total, page } = useSelector(({ cars }) => cars);

  const handlePageChange = (page, pageSize) => {
    dispatch(setPage(page));
    dispatch(getCars());
  };

  const handlePageSizeChange = (_, pageSize) => {
    dispatch(setPageSize(pageSize));
    dispatch(getCars());
  }

  return (
    <TableFooter>
      <Box justifycontent='space-between' overflow='hidden'>
        <Box alignitems='center'>
          <Text>{`Показано записей: ${Math.min(pageSize * page, total)} из ${total}`}</Text>
        </Box>
        <Box justifycontent='flex-end'>
          <Pagination
            current={page}
            pageSize={pageSize}
            total={total}
            onChange={handlePageChange}
            onShowSizeChange={handlePageSizeChange}
          />
        </Box>
      </Box>
    </TableFooter>
  );
};

export default CarsFooter;
