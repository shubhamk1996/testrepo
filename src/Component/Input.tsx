import React from "react";
import { Form } from "react-bootstrap";

const Input = ({
  label,
  type,
  placeholder,
  value,
  setValue,
  as,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: any;
  setValue: any;
  as?: any;
}) => {
  const changeHandle = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>
          {label} <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          setValue={setValue}
          as={as}
          onChange={changeHandle}
        />
      </Form.Group>
    </>
  );
};

export default Input;
