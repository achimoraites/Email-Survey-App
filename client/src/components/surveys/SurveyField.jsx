// SurveyField renders a single field
import React from 'react';

export default ({ input, label, meta: {error, touched } }) => {

    return (
        <div style={{margin: '1em auto'}}>
           <label style={{fontSize: '1.5em', color: '#000'}}>{label}</label>
            <input {...input} style={{margin: '0.2em auto'}} />
            <div className="red-text">
                {touched && error}
            </div>
        </div>
    )
}