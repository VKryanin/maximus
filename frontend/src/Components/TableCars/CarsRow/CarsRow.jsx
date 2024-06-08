import TableBodyRow from "../../../ui/Table/TableBodyRow/TableBodyRow";
import TableBodyRowCell from '../../../ui/Table/TableBodyRowCell/TableBodyRowCell'
import { columnTemplateBody } from "../../../utils/constants"
import { formatDateTime } from "../../../utils/helpers";

const CarsRow = ({ item }) => {
  const { _id,
    mark, model,
    drive,
    engine,
    equipmentName,
    price,
    createdAt } = item
  return (
    <TableBodyRow columntemplate={columnTemplateBody.join(" ")}>
      <TableBodyRowCell>{_id}</TableBodyRowCell>
      <TableBodyRowCell>{`${mark} ${model ? model : ''}`}</TableBodyRowCell>
      <TableBodyRowCell>{`${drive} (${engine.power} л.с.)`}</TableBodyRowCell>
      <TableBodyRowCell title={equipmentName}>{equipmentName}</TableBodyRowCell>
      <TableBodyRowCell>{price.toLocaleString('ru-RU')} &#8381;</TableBodyRowCell>
      <TableBodyRowCell>{formatDateTime(createdAt)}</TableBodyRowCell>
    </TableBodyRow>
  )
}

export default CarsRow