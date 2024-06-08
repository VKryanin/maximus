import { useSelector } from 'react-redux';
import Text from '../../ui/Text';
import HeaderS from '../../ui/HeaderS';
import Box from '../../ui/Box';

const Header = () => {
  const { list } = useSelector(({ cars }) => cars);

  const countBrands = () => {
    const brandCounts = {};
    list.forEach((car) => {
      if (car.mark in brandCounts) {
        brandCounts[car.mark]++;
      } else {
        brandCounts[car.mark] = 1;
      }
    });
    return brandCounts;
  };


  const brandCounts = countBrands();

  return (
    <HeaderS width='100%' margin='24px 0'>
      {Object.keys(brandCounts).map((brand) => (
        <Box key={brand}>
          <Text margin='0 12px 0 0' color='#188dcf'>
            {`${brand}: `}
          </Text>
          <Text>{`${brandCounts[brand]}`}</Text>
        </Box>

      ))}
    </HeaderS>
  );
};

export default Header;
