import { memo } from 'react';
import { Tooltip } from 'antd';
import {
  TableBodyRowCellContainer,
  TextCell,
  BoxCell,
  DoubleLinkCell,
  DoubleItemCell,
  StyledPopover,
} from '../Styled/TableBodyRowStyledComps';

const TableBodyRowCell = ({
  children,
  onClick,
  onMouseEnter,
  onMouseDown,
  index,
  cellType = 'text',
  title,
  titleSecond,
  defaultTitle,
  justifycontent,
  padding,
  cursor,
  boxCellGap,
  whiteSpace,
  textAlign,
  popoverContent,
  popoverTitle,
  popoverTrigger = 'hover',
  popoverPlacement,
  tooltipMouseLeaveDelay = 0,
  tooltipMouseEnterDelay = 0.5,
  width,
  hover,
  dottedText,
  iconHoverUpscale,
  textShadow,
  fontColor,
  linkStyle,
  dangerShadow,
  breakWord,
  textOpacity,
  backgroundColor,
  textCellPadding,
  popoverAlign,
  sticky,
  left,
  gridArea,
  borderBottom,
  color
}) => (
  <TableBodyRowCellContainer
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseDown={onMouseDown}
    index={index}
    justifycontent={justifycontent}
    padding={padding}
    cursor={cursor}
    hover={hover}
    dottedText={dottedText}
    iconHoverUpscale={iconHoverUpscale}
    textShadow={textShadow}
    fontColor={fontColor}
    linkStyle={linkStyle}
    dangerShadow={dangerShadow}
    breakWord={breakWord}
    backgroundColor={backgroundColor}
    title={defaultTitle}
    sticky={sticky}
    left={left}
    gridArea={gridArea}
    borderBottom={borderBottom}
    color={color}
  >
    {popoverContent ? (
      <StyledPopover
        content={popoverContent}
        title={popoverTitle}
        trigger={popoverTrigger}
        placement={popoverPlacement}
        destroyTooltipOnHide
        overlayStyle={{ zIndex: 1050 }}
        popoverAlign={popoverAlign}
      >
        {cellType === 'text' ? (
          <TextCell
            textCellPadding={textCellPadding}
            title={title || children}
            color={color}
          >
            {children}
          </TextCell>
        ) : (
          ''
        )}
        {cellType === 'box' ? (
          <BoxCell
            boxCellGap={boxCellGap}
            title={title || ''}
            justifycontent={justifycontent}
            whiteSpace={whiteSpace}
            textAlign={textAlign}
            padding={padding}
            color={color}
          >
            {children}
          </BoxCell>
        ) : (
          ''
        )}
        {cellType === 'doubleLink' ? (
          <DoubleLinkCell title={title || ''}>{children}</DoubleLinkCell>
        ) : (
          ''
        )}
        {cellType === 'doubleItem' ? (
          <DoubleItemCell title={title || ''}>{children}</DoubleItemCell>
        ) : (
          ''
        )}
      </StyledPopover>
    ) : (
      <>
        {cellType === 'text' &&
          (title || titleSecond ? (
            <Tooltip
              title={titleSecond || ''}
              placement='bottom'
              destroyTooltipOnHide
              mouseLeaveDelay={tooltipMouseLeaveDelay}
              mouseEnterDelay={tooltipMouseEnterDelay}
            >
              <Tooltip
                title={title || ''}
                destroyTooltipOnHide
                mouseLeaveDelay={tooltipMouseLeaveDelay}
                mouseEnterDelay={tooltipMouseEnterDelay}
              >
                <TextCell
                  width={width}
                  textAlign={textAlign}
                  textOpacity={textOpacity}
                  breakWord={breakWord}
                  textCellPadding={textCellPadding}
                  color={color}
                >
                  {children}
                </TextCell>
              </Tooltip>
            </Tooltip>
          ) : (
            <TextCell
              textCellPadding={textCellPadding}
              width={width}
              textAlign={textAlign}
              textOpacity={textOpacity}
              breakWord={breakWord}
              color={color}
            >
              {children}
            </TextCell>
          ))}
        {cellType === 'box' &&
          (title ? (
            <Tooltip
              title={title || ''}
              destroyTooltipOnHide
              mouseLeaveDelay={tooltipMouseLeaveDelay}
              mouseEnterDelay={tooltipMouseEnterDelay}
            >
              <BoxCell
                boxCellGap={boxCellGap}
                justifycontent={justifycontent}
                whiteSpace={whiteSpace}
                textAlign={textAlign}
                padding={padding}
                color={color}
              >
                {children}
              </BoxCell>
            </Tooltip>
          ) : (
            <BoxCell
              boxCellGap={boxCellGap}
              justifycontent={justifycontent}
              whiteSpace={whiteSpace}
              textAlign={textAlign}
              width={width}
            >
              {children}
            </BoxCell>
          ))}
        {cellType === 'doubleLink' &&
          (title ? (
            <Tooltip
              title={title || ''}
              destroyTooltipOnHide
              mouseLeaveDelay={tooltipMouseLeaveDelay}
              mouseEnterDelay={tooltipMouseEnterDelay}
            >
              <DoubleLinkCell>{children}</DoubleLinkCell>
            </Tooltip>
          ) : (
            <DoubleLinkCell>{children}</DoubleLinkCell>
          ))}

        {cellType === 'doubleItem' &&
          (title ? (
            <Tooltip
              title={title || ''}
              destroyTooltipOnHide
              mouseLeaveDelay={tooltipMouseLeaveDelay}
              mouseEnterDelay={tooltipMouseEnterDelay}
            >
              <DoubleItemCell>{children}</DoubleItemCell>
            </Tooltip>
          ) : (
            <DoubleItemCell>{children}</DoubleItemCell>
          ))}
      </>
    )}
  </TableBodyRowCellContainer>
);

export default memo(TableBodyRowCell);
