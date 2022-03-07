import React from 'react';
import InputField from '../../../../components/InputField';
import { states } from '../../../../constant';
import { useValidate } from '../../../../context/Validate';
import './style.scss';
export default function BillingInfo() {
    const { fields, setFields } = useValidate();
    return (
        <div className='billingInfo'>
            <div className='titleGroup'>
                <h2>Billing info</h2>
                <div className='noteCurrentStep'>
                    <p>Please enter your billing info</p>
                    <p>Step 1 of 5</p>
                </div>
            </div>
            <form>
                <div className='left'>
                    <InputField type='text' label='First name' placeHolder='First name' id='fname'
                        value={fields.firstName} onChange={(e) => {
                            setFields({
                                ...fields,
                                firstName: e.currentTarget.value
                            });
                        }}
                        field='firstName'

                    />
                    <InputField type='text' label='Email address' placeHolder='Email address' id='email'
                        value={fields.email} onChange={(e) => {
                            setFields({
                                ...fields,
                                email: e.currentTarget.value
                            });
                        }}
                        field='email'

                    />
                    <InputField type='text' label='Address' placeHolder='Address'
                        value={fields.address} onChange={(e) => {
                            setFields({
                                ...fields,
                                address: e.currentTarget.value
                            });
                        }}
                        field='address'
                        id='address' />

                    {/* <InputField label='State' id='states' name='states' states={states}
                        select value={fields.state}
                        onChange={(e) => {
                            setFields({
                                ...fields,
                                state: e.currentTarget.value,
                            });
                        }}
                        field='state'
                    /> */}
                </div>
                <div className='right'>
                    <InputField type='text' label='Last name' placeHolder='Last name'
                        value={fields.lastName} onChange={(e) => {
                            setFields({
                                ...fields,
                                lastName: e.currentTarget.value
                            });
                        }} id='lname'
                        field='lastName'
                    />
                    <InputField type='number' label='Phone number' placeHolder='Phone number'
                        value={fields.phone} onChange={(e) => {
                            setFields({
                                ...fields,
                                phone: e.currentTarget.value
                            });
                        }}
                        field='phone'
                        id='phone' />
                    <InputField type='text' label='Town / City' placeHolder='Town or City'
                        value={fields.province} onChange={(e) => {
                            setFields({
                                ...fields,
                                province: e.currentTarget.value
                            });
                        }}
                        field='province'
                        id='Town or city' />
                    {/* <InputField type='text' label='Zip/Postal code' placeHolder='Postal
                    code or Zip'
                        value={fields.zipCode} onChange={(e) => {
                            setFields({
                                ...fields,
                                zipCode: e.currentTarget.value
                            });
                        }}
                        field='zipCode'
                        id='postalCode' /> */}
                </div>
            </form>
        </div>
    );
}

