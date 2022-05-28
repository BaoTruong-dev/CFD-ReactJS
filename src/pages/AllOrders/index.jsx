import { faBell, faBomb, faCoins, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import EmptyOrders from '../../components/EmptyOrders';
import MenuDropDown from '../../components/MenuDropDown';
import OrdernInfo from '../../components/OrderInfo';
import LoadingPage from '../LoadingPage';
import './style.scss';
// import cart from '../../../public/empty_cart.png';
export default function AllOrders() {
    let nav = ['Home', 'Update Information'];
    let mainLink = 'user';
    let { user } = useSelector(store => store?.auth);
    let { data } = useSelector(store => store?.order);
    // let [allOrders, setAllorders] = useState([]);
    // useEffect(() => {
    //     (async function () {
    //         let { data } = await orderService.getAllOrder();
    //         setAllorders(data);
    //     })();
    // }, []);
    const handleFeatures = () => {
        alert('This feature isn\'t open yet! ');
    };
    const [isChoose, setIsChoose] = useState(true);
    let newData = data?.filter(item => {
        return item.totalQuantity > 0;
    });
    if (!data) {
        return <LoadingPage />;
    }
    return (
        <>
            <MenuDropDown nav={nav} mainLink={mainLink} />
            {newData.length > 0 ?
                <div className='orderOrders container-fluid'>
                    <div className='orderOrders__left'>
                        <div className='avatarGroup'>
                            <div className='avatarGroup__img'>
                                <img src={user?.avatar}></img>
                            </div>
                            <div className='avatarGroup__name'>
                                <p>{user?.name}</p>
                                <Link className='avatarGroup__name--edit' to='/user/updateinformation'>
                                    <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                                    <p>Edit Information</p>
                                </Link>
                            </div>
                        </div>
                        <div className='options'>
                            <div className='options__group' onClick={handleFeatures}>
                                <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>
                                <p>Kho Xu</p>
                            </div>
                            <div className='options__group' onClick={handleFeatures}>
                                <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                                <p>Thông Báo</p>
                            </div>
                            <div className='options__group' onClick={handleFeatures}>
                                <FontAwesomeIcon icon={faBomb}></FontAwesomeIcon>
                                <p>Khuyến Mãi Khủng</p>
                            </div>
                        </div>
                    </div>
                    <div className='orderOrders__right'>
                        <ul className='navOrders'>
                            <li className={isChoose ? 'active' : ''}>All Orders</li>
                        </ul>
                        <div className='unitItem'>
                            {newData?.map((e) => {
                                return <div className='unitItem__wrapper'>
                                    {e?.listItems?.map((eachItem, index) => {
                                        return <OrdernInfo key={index}
                                            img={eachItem.product.thumbnail_url}
                                            name={eachItem.product.name}
                                            des={eachItem.product.short_description}
                                            quantity={eachItem.quantity}
                                            unitPrice={e.subTotal}
                                            tax={e.tax}
                                            total={e.total}
                                        >
                                            {e.listItems.length < 2 ?
                                                <div className='totalButton'>
                                                    <Button color='white' size='medium' round='round'
                                                        path={'/order/orderdetail'} id={e._id}
                                                    >More Details
                                                    </Button>
                                                </div>
                                                : e.listItems.length == index + 1 ?
                                                    <div className='totalButton'>
                                                        <Button color='white' size='medium' round='round'
                                                            path={'/order/orderdetail'} id={e._id}
                                                        >More Details
                                                        </Button>
                                                    </div>
                                                    : ''}
                                        </OrdernInfo>;
                                    })}
                                </div>;
                            })}
                        </div>
                    </div>



                </div> :
                <EmptyOrders />
            }
        </>

    );
}
