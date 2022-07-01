import React, { useState } from 'react'

export const TemplateForm = () => {
  const [file, setFile] = useState(null)
  const [image, setImage] = useState(null);

  function changeProfilePhoto(e) {
    setFile(e.target.files[0]);
  }

  return (
    <div>
      <label>Select a file:</label>
      <input 
        type="file" 
        id="file"
        multiple
        onChange={changeProfilePhoto}
          />
    </div>
  )
}

