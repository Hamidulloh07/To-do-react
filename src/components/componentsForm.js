import React, { useState } from 'react';

function FormList({addPost}) {
    const [value,setValue] = useState("");
    const [isValid, setValid] = useState(true)

    const newPost =  (e) => {
      e.preventDefault()

      if(value) {
        let obj = {
          label: value,
        }
  
        addPost(obj)
        setValid(true)
        setValue("")
      }
      
      else{
        setValid(false)
      }  
    }

    return (
        <>
            <form className="form" onSubmit={newPost}>
              <div className="d-flex  w-100">
                <div className=" ">
                  <input 
                  className=" form-control w-100" 
                  type="text" 
                  placeholder="typing..."
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  required
                  />
                </div>

                <div className="ms-3">        
                  <button 
                  type='submit'
                  className="btn btn-danger " 
                  onClick={newPost}
                  >
                    Submit
                  </button>
                </div>

                </div>
            </form>
        </>
    );
}



export default FormList;