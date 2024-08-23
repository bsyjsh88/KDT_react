import React, { useState } from 'react';
import { useFormik } from 'formik';
import './App.css';
import { Button, Input } from 'antd';

const App = () => {
  const [data, setData] = useState({ id: "", pass: "" });

  const dataFormik = useFormik({
    initialValues: {
      id: "",
      pass: "",
    },

    onSubmit: (values) => {
      setData(values);
    },
  });

  return (
    <div className="container">
      <form onSubmit={dataFormik.handleSubmit}>
        <div className="form-group">
          <label>아이디</label>
          <Input
            name="id"
            onChange={dataFormik.handleChange}
            value={dataFormik.values.id}
          />
        </div>
        <div className="form-group">
          <label>비밀번호</label>
          <Input
            name="pass"
            type="password"
            onChange={dataFormik.handleChange}
            value={dataFormik.values.pass}
          />
        </div>
        <div className="button-container">
          <Button htmlType="submit">로그인</Button>
        </div>
      </form>

      {data && data.id && data.pass ? (
        <div className="result-container">
          <p>아이디: {data.id}</p>
          <p>비밀번호: {data.pass}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
