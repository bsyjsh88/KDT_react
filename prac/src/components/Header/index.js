import { Select } from "antd";
import './header.css'

const Header = (props) => {
  
  const {setType} = props;


   const options = [
    { value: "data1", label: "첫번째화면" },
    { value: "data2", label: "두번째화면" },
    { value: "data3", label: "세번째화면" },
    ];
  
  
    return (
      <div className="wrapBox">
        <Select defaultValue="data1" onChange={(value) => setType(value)}>
          {options.label}
        </Select>
      </div>
    );
  };

 


export default Header;
