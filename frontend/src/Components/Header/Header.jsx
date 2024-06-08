import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Text from '../../ui/Text';
import HeaderS from '../../ui/HeaderS';
import Box from '../../ui/Box';
import { Select, Space } from 'antd';
import { getCars, marksCollection, setCars } from '../../store/carsSlice/carsSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { staticMarks } = useSelector(({ cars }) => cars);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModels, setSelectedModels] = useState([]);

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

  const handleBrandClick = (brand) => {
    if (selectedBrand === brand) {
      setSelectedBrand(null);
      setSelectedModels([]);
      dispatch(getCars())
    } else {
      setSelectedBrand(brand);
      setSelectedModels([]);
      dispatch(marksCollection({ body: { marks: [brand] } }));
    }
  };

  const handleModelSelectChange = (value) => {
    setSelectedModels(value);
    if (value.length) {
      dispatch(setCars({ model: value, mark: selectedBrand }))
    } else {
      dispatch(getCars())
    }

  };

  const filteredModels = staticMarks
    .filter(car => car.mark === selectedBrand)
    .map(car => car.model);

  const uniqueModels = Array.from(new Set(filteredModels)).map(model => ({ label: model, value: model }));

  return (
    <HeaderS width='100%' margin='24px 0' column>
      <Box>
        {Object.keys(brandCounts).map((brand) => (
          <Box
            key={brand}
            style={{
              cursor: 'pointer'
            }}
            onClick={() => handleBrandClick(brand)}
          >
            <Text margin='0 12px 0 0' color='#188dcf' fontWeight={selectedBrand === brand ? '600' : '300'}>
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
          placeholder={`Выберите модели для ${selectedBrand}`}
          onChange={handleModelSelectChange}
          options={uniqueModels}
          disabled={!selectedBrand}
          value={selectedModels}
        />
      </Space>

    </HeaderS>
  );
};

export default Header;
