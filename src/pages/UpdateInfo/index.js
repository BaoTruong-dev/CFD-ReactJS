import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import userService from '../../services/userService';
import './style.scss';
export default function UpdateInfo() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let nameInputRef = useRef();
    let phoneInputRef = useRef();
    const [error, setError] = useState({
    });
    const [updateInfo, setUpdateInfo] = useState({});
    useEffect(() => {
        let info = userService.getInfo();
        info.then(res => {
            setUpdateInfo(res.data);
        });
    }, []);
    const onChangeImg = (e) => {
        const file = e.currentTarget.files[0];
        let urlAvatar = URL.createObjectURL(file);
        setUpdateInfo({
            ...updateInfo,
            avatar: urlAvatar
        });
    };
    const onChangeInput = (name) => (e) => {
        let value = e.target.value;
        setUpdateInfo({
            ...updateInfo,
            [name]: value
        });
    };
    const handleUpdate = async (e) => {
        e.preventDefault();
        let objError = {};
        if (!updateInfo.name) {
            objError.name = true;
        }
        else {
            objError.name = false;
        }
        if (!updateInfo.phone) {
            objError.phone = true;
        }
        else {
            objError.phone = false;
        }
        if (!updateInfo.gender) {
            objError.gender = true;
        }
        else {
            objError.gender = false;
        }
        setError(objError);
        let checked = Object.values(objError).every(data => !data);
        if (checked) {
            dispatch({
                type: 'UPDATE_INFO',
                payload: updateInfo
            });
            navigate('/');
        }
    };
    const logoutHandle = () => {
        localStorage.removeItem('token');
        dispatch({
            type: 'LOGOUT'
        });
    };
    return (
        <>
            <div className='updateInfo'>
                <h2>Update your information</h2>
                <form className='updateInfo__wrapper'>
                    <div className='left'>
                        <div className='group'>
                            <label className='group__title'>Email: </label>
                            <div className='group__input'>
                                <input disabled value={updateInfo.email} />
                            </div>
                        </div>
                        <div className='group'>
                            <label className='group__title'>Name: </label>
                            <div className='group__input'>
                                <input ref={nameInputRef} value={updateInfo.name} onChange={onChangeInput('name')} />
                                {error.name && <p className='error'>Your name isn't in the correct format!</p>}
                            </div>


                        </div>
                        <div className='group'>
                            <label className='group__title'>Phone number: </label>
                            <div className='group__input'>
                                <input type='number' ref={phoneInputRef} value={updateInfo.phone} onChange={onChangeInput('phone')} />
                                {error.phone && <p className='error'>Please fill this field.</p>}
                            </div>
                        </div>
                        <div className='group'>
                            <label className='group__title'>Gender:</label>
                            <div className='group__wrapper'>
                                <div>
                                    <input type='radio' id="male" value='male' checked={updateInfo.gender === 'male'} onChange={onChangeInput('gender')} />
                                    <label htmlFor='male'>Male</label>
                                </div>
                                <div>
                                    <input type='radio' id="female" value='female' checked={updateInfo.gender === 'female'} onChange={onChangeInput('gender')} />
                                    <label htmlFor='female'>Female</label>
                                </div>
                                <div>
                                    <input type='radio' id="another" value='another' checked={updateInfo.gender === 'another'} onChange={onChangeInput('gender')} />
                                    <label htmlFor='another'>Another</label>
                                    {error.gender && <p className='error'>Please fill this field.</p>}
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div></div>
                            <Button round='round' color='white' size='large' onClick={handleUpdate}>Update</Button>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='--avatar'>
                            {updateInfo.avatar && <img src={updateInfo.avatar} />}
                            <input type="file" onChange={onChangeImg} />
                        </div>
                        <Button color='white' round='round' size='medium' onClick={logoutHandle} path='/'>Log out</Button>
                    </div>
                </form>
            </div>
        </>
    );
}
