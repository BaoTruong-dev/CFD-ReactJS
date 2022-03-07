import React, { useRef } from 'react';
import Agree from '../../../../components/Agree';
import { Link } from 'react-router-dom';
import './style.scss';
import { useValidate } from '../../../../context/Validate';
export default function Confirmation() {
    const { fields, setFields, errorFields } = useValidate();
    const onChangeChecked = (e) => {
        let value = e.currentTarget.checked;
        if (e.target.id === 'agreeSending') {
            if (value) {
                setFields({
                    ...fields,
                    agreeEmail: 'checked'
                });
            } else {
                setFields({
                    ...fields,
                    agreeEmail: ''
                });
            }
        }
        if (e.target.id === 'agreeTermsAConditions') {
            if (value) {
                setFields({
                    ...fields,
                    agreePolicy: 'checked'
                });
            } else {
                setFields({
                    ...fields,
                    agreePolicy: ''
                });
            }
        }

    };
    return (
        <div className='confirmation distanceTop'>
            <div className='titleGroup'>
                <h2>Confirmation</h2>
                <div className='noteCurrentStep'>
                    <p>We are getting to the end. Just few clicks and your order si ready!</p>
                    <p>Step 5 of 5</p>
                </div>
            </div>
            <div className='confirmation__agree'>
                <Agree id="agreeSending" onChange={onChangeChecked}>I agree with sending an Marketing and newsletter emails. No spam, promissed!</Agree>
                <p className='error' >{errorFields.agreeEmail}</p>
                <Agree id="agreeTermsAConditions" onChange={onChangeChecked}>I agree with our <Link to="/">terms and conditions</Link> and <Link to="/">privacy policy</Link>.
                </Agree>
                <p className='error'>{errorFields.agreePolicy}</p>
            </div>
        </div>
    );
}
