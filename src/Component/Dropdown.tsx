import React from "react";
import { Form } from "react-bootstrap";

const Dropdown = ({
  data,
  label,
  option,
  value,
  setValue,
}: {
  data: any;
  label: string;
  option: string;
  value: any;
  setValue: any;
}) => {
  const changeHandle = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Form.Label>
        {label} <span className="text-danger">*</span>
      </Form.Label>
      <Form.Select className="mb-3" value={value} onChange={changeHandle}>
        <option>{option}</option>
        {data.map((item: any, index: any) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </Form.Select>
    </>
  );
};

export default Dropdown;
