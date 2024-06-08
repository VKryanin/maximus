import TableHead from "../../../ui/Table/TableHead/TableHead";
import TableHeadRow from "../../../ui/Table/TableHeadRow/TableHeadRow";
import TableHeadCell from "../../../ui/Table/TableHeadCell/TableHeadCell";
import { columnTemplateHead } from "../../../utils/constants";

const CarsHead = () => {
  return (
    <TableHead>
      <TableHeadRow columnTemplate={columnTemplateHead.join(' ')}>
        <TableHeadCell>
          ID
        </TableHeadCell>
        <TableHeadCell>
          Марка/Модель
        </TableHeadCell>
        <TableHeadCell>
          Модификация
        </TableHeadCell>
        <TableHeadCell>
          Комплектация
        </TableHeadCell>
        <TableHeadCell>
          Стоимость
        </TableHeadCell>
        <TableHeadCell>
          Дата создания
        </TableHeadCell>
      </TableHeadRow>
    </TableHead>
  )
}

export default CarsHead;