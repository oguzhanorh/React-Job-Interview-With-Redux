import React from 'react';

//Burada ki amacımız generic bir yapı oluşturup diğer sayfalarda kullanmak.

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
        //placeholder={labelText}
      />
    </div>
  );
};
export default FormRow;
