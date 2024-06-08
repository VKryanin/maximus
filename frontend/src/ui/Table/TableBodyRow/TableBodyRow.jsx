import { memo } from 'react';
import { Dropdown } from 'antd';
import TableBodyRowContainer from '../Styled/TableBodyRowContainer';

const TableBodyRow = ({
  children,
  minHeight,
  height,
  onClick,
  index,
  columnTemplate,
  boxShadow,
  margin,
  cursor,
  dropdown,
  dropdownContent,
  noAlternateBackground,
  lastElementCount,
  selected,
  gridTemplateAreas,
  borderTop,
  oddRowBackgroundColor,
  width,
  backgroundColor,
}) =>
  dropdown ? (
    <Dropdown trigger='contextMenu' destroyPopupOnHide dropdownRender={() => dropdownContent}>
      <TableBodyRowContainer
        minHeight={minHeight}
        height={height}
        onClick={onClick}
        index={index}
        columnTemplate={columnTemplate}
        boxShadow={boxShadow}
        margin={margin}
        cursor={cursor}
        noAlternateBackground={noAlternateBackground}
        lastElementCount={lastElementCount}
        selected={selected}
        gridTemplateAreas={gridTemplateAreas}
        oddRowBackgroundColor={oddRowBackgroundColor}
        width={width}
        backgroundColor={backgroundColor}
      >
        {children}
      </TableBodyRowContainer>
    </Dropdown>
  ) : (
    <TableBodyRowContainer
      backgroundColor={backgroundColor}
      minHeight={minHeight}
      height={height}
      onClick={onClick}
      index={index}
      columnTemplate={columnTemplate}
      boxShadow={boxShadow}
      margin={margin}
      cursor={cursor}
      noAlternateBackground={noAlternateBackground}
      lastElementCount={lastElementCount}
      selected={selected}
      gridTemplateAreas={gridTemplateAreas}
      borderTop={borderTop}
      oddRowBackgroundColor={oddRowBackgroundColor}
      width={width}
    >
      {children}
    </TableBodyRowContainer>
  );

export default memo(TableBodyRow);
