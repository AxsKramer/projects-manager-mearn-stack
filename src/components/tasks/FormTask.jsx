import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext';

const FormTask = () => {

  const projectsContext = useContext(projectContext);
  
  const {project} = projectsContext;

  if(!project){
    return null;
  }

  const [currentProject] = project;

  return ( 
    <div className="formulario">
      <form >
        <div className="contenedor-input">
          <input 
            type="text"
            className='input-text'
            placeholder='Task´s Name'
            name='name'
          />
        </div>
        <div className="contenedor-input">
          <input 
            type="submit"
            className='btn btn-primario btn-submit btn-block'
            value='Add Task'
          />
        </div>
      </form>
    </div>
   
   );
}
 
export default FormTask;