import { Select } from "antd";
import './header.css'

const { Option } = Select;

const Header = ({ options, setType, data1, data2, data3 }) => {
  const handleChange = (value) => {
    if (value === 'data1') {
      setType(data1);
    } else if (value === 'data2') {
      setType(data2);
    } else if (value === 'data3') {
      setType(data3);
    }
  };

  return (
    <div className="wrapBox">
      <Select defaultValue="data1" style={{ width: 200 }} onChange={handleChange}>
        <Option value="data1">첫번째 화면</Option>
        <Option value="data2">두번째 화면</Option>
        <Option value="data3">세번째 화면</Option>
      </Select>
    </div>
  );
};

export default Header;
