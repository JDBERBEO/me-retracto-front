import React, { useState } from 'react';
function AddRemoveInputField({
  inputFields,
  addInputField,
  removeInputFields,
  handleChange,
  totalSize
}) {
  // const [inputFields, setInputFields] = useState([{ name: '', size: '0 bytes' }]);
  // const [filesArray, setFile] = useState([{ name: '' }]);

  function formatBytes(a, b = 2) {
    if (!+a) return '0 Bytes';
    const c = 0 > b ? 0 : b,
      d = Math.floor(Math.log(a) / Math.log(1024));
    return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${
      ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][d]
    }`;
  }

  return (
    <>
      <button className="containerButton__size-m__purple mb-4" onClick={addInputField}>
        Agregar un campo nuevo
      </button>
      {!!inputFields &&
        inputFields.map((input, index) => {
          return (
            <div key={index} className="mt-1">
              <label className="me-2">
                <div className="iconBorder-white">
                  <p className="iconBorder-white__icon">+</p>
                </div>
                <input
                  id="inputTag"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={(event) => handleChange(index, event)}
                />
              </label>
              <span className="form-label">Nombre: </span>
              <span className="helperText me-2">
                {input && input.name ? input.name : ' Aún no has cargando ningún archvio'}
              </span>
              <span className="form-label">Peso: </span>
              <span className="helperText me-2">
                {input && input.size ? formatBytes(input.size) : '0 bytes'}
              </span>
              {inputFields.length >= 1 ? (
                <button className="btn btn-outline-danger" onClick={() => removeInputFields(index)}>
                  x
                </button>
              ) : (
                ''
              )}
            </div>
          );
        })}
      <label className="outlined-label mt-5">
        Peso Total: {formatBytes(totalSize(inputFields))}
      </label>
    </>
  );
}
export default AddRemoveInputField;
