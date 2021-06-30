import { useEffect ,useState } from "react";
const SimpleInput = (props) => {
  const [entredName, setEntredName] = useState('');
  const [entredNameIsValide, setEntredNameIsValide] = useState(false);
  
const [entredNameTouched, setEntredNameTouched] = useState(false);
  useEffect(() => {
    if(entredNameIsValide){
      // send request data
      console.log('name is valide ');
    }
    // return () => {
    //   cleanup
    // };
  }, [entredNameIsValide]);


  // change key stroke
  const nameInputChangeHandler = event => {
    setEntredName(event.target.value);
    if (event.target.value.trim() !== ''){
      setEntredNameIsValide(true);
       
    } 
  };

  // lose focus 
  const nameInputBlurHandler = event => {
    setEntredNameTouched(true);
    if (entredName.trim() === ''){
      setEntredNameIsValide(false); 
    } 
  }

  // submited 
  const formSubmissionHandler = event => {
    event.preventDefault();
    setEntredNameTouched(true);
    if (entredName.trim() === ''){
      setEntredNameIsValide(false);
        return;
    } 

    setEntredNameIsValide(true);

    console.log(entredName);

    setEntredName('');
    setEntredNameTouched(false)
  };

  // check if data valide or not
  const nameInputIsInvalide = !entredNameIsValide && entredNameTouched;
  const nameInputClasses = nameInputIsInvalide ? 'form-control invalid' : 'form-control '
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text'  id='name'
        value={entredName} onChange={nameInputChangeHandler}
        // on blur when lose focus 
        onBlur={nameInputBlurHandler}/>
       {nameInputIsInvalide &&   <span className="error-text">Name must not be Empthy</span>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
