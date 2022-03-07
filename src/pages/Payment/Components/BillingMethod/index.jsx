import React, { useEffect, useRef, useState } from 'react';
import DeliMethod from '../../../../components/DeliMethod';
import { useValidate } from '../../../../context/Validate';
import { DHLIcon, FedExIcon } from '../../../../svgs';
import './style.scss';
export default function BillingMethod() {
    const { errorFields, setFields, fields } = useValidate();
    const [checked, setChecked] = useState('');


    const handleClickBilling = (e) => {
        let value = e.currentTarget.id;
        setChecked(value);
        setFields({
            ...fields,
            shippingMethod: value,
        });
    };
    return (
        <div className='billingMethod distanceTop'>
            <div className='titleGroup'>
                <h2>Billing method</h2>
                <div className='noteCurrentStep'>
                    <p>Please enter your payment method</p>
                    <p>Step 2 of 5</p>
                </div>
            </div>
            <div className='billingMethod__options'>
                <DeliMethod id={'fedEx'} label={'FedEx'}
                    fee={'+32 USD'} brand={<FedExIcon />}
                    onClick={handleClickBilling}
                    checked={'fedEx' === checked}
                />
                <DeliMethod id={'dhl'} label={'DHL'}
                    fee={'+15 USD'} brand={<DHLIcon />}
                    onClick={handleClickBilling}
                    checked={'dhl' === checked}
                />
            </div>
            <p className='error'>{errorFields.shippingMethod}</p>
        </div>
    );
}
