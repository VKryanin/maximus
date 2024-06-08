import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Text from '../../ui/Text';
import HeaderS from '../../ui/HeaderS';
import Box from '../../ui/Box';
import { Select, Space } from 'antd';
import { getCars, marksCollection } from '../../store/carsSlice/carsSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { staticMarks, marks } = useSelector(({ cars }) => cars);

  const countBrands = () => {
    const brandCounts = {};
    staticMarks.forEach((car) => {
      if (car.mark in brandCounts) {
        brandCounts[car.mark]++;
      } else {
        brandCounts[car.mark] = 1;
      }
    });
    return brandCounts;
  };

  const brandCounts = countBrands();

  const uniqueMarks = Array.from(marks).map(mark => ({ label: mark, value: mark }));

  const handleSelectChange = (value) => {
    if (value.length) {
      dispatch(marksCollection({ body: { marks: value } }));
    } else {
      dispatch(getCars())
    }
  };

  return (
    <HeaderS width='100%' margin='24px 0' column>
      <Box>
        {Object.keys(brandCounts).map((brand) => (
          <Box
            key={brandCounts[brand]}
            onClick={() => dispatch(marksCollection({ body: { marks: [brand] } }))}
          >
            <Text margin='0 12px 0 0' color='#188dcf'>
              {`${brand}: `}
            </Text>
            <Text>{`${brandCounts[brand]}`}</Text>
          </Box>
        ))}
      </Box>
      <Space style={{ width: 'max-content', minWidth: '160px', marginTop: '12px' }} direction="vertical">
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Выберите марки"
          onChange={handleSelectChange}
          options={uniqueMarks}
        />
      </Space>
    </HeaderS>
  );
};

export default Header;
