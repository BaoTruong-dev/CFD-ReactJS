import React from 'react';
import Textarea from '../../../../components/Textarea';
import { useValidate } from '../../../../context/Validate';
import './style.scss';

export default function AddInfo() {
    const { fields, setFields, errorFields, setErrorFields } = useValidate();
    return (
        <div className='addInfo'>
            <div className='titleGroup distanceTop'>
                <h2>Additional informations</h2>
                <div className='noteCurrentStep'>
                    <p>Need something else? We will make it for you!</p>
                    <p>Step 4 of 5</p>
                </div>
                <div className='addInfo__area'>
                    <Textarea id='note' label='Order notes' placeholder='Need a specific delivery day? Sending a gitf? Let’s say ...'
                        value={fields.note} onChange={(e) => {
                            let value = e.currentTarget.value;
                            setFields({
                                ...fields,
                                note: value
                            });
                        }}
                    />
                    <p className='error'>{errorFields.note}</p>
                </div>
            </div>
        </div>
    );
}
