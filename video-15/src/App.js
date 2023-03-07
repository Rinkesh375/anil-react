import React from 'react';

const App = () => {
  const getFormData = (e)=>{
        e.preventDefault()
        console.log("input",e.target[0].value)
        console.log("select",e.target[1].value)
        console.log("input",e.target[2].checked)
       
  }
  return (
    <div className='App'>
      <form onSubmit={getFormData}>
      <input type="text" />
      <select name="course" id="course">
            <option value="">Select option</option>
            <option value="DSA">DSA</option>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Javascript">Javascript</option>

            </select>
            <input type="checkbox" name="condition" id="condition" /> <span>Accept condition</span>
            <input type="submit" value="Submit" />
        {/* <div><input type="text" /></div>
        <div><select name="course" id="course">
            <option value="">Select option</option>
            <option value="DSA">DSA</option>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Javascript">Javascript</option>

            </select></div>
            <div> <input type="checkbox" name="condition" id="condition" /> <span>Accept condition</span></div> */}
           
      </form>
    </div>
  );
}

export default App;

