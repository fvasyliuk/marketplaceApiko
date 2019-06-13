import React from 'react';
import T from 'prop-types';
import s from './UploadInput.module.scss';


function UploadInput( props ){

    const inputRef = React.createRef()

    return(
        <div className={s.container} onClick={()=>inputRef.current.click()}>                      
            <div className={s.plus}>+<input type="file" ref={inputRef} {...props} /></div>
        </div>        
    );
}

UploadInput.propTypes = {

};

export default UploadInput;