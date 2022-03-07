import React from 'react';
import Blog from '../../../../components/Blog';
import Button from '../../../../components/Button';
import { authorInfo } from '../../../../constant';
import './style.scss';
export default function BlogHome() {
    return (
        <div className='blogHome container-fluid'>
            <div className='top'>
                <h3>Read our Blogs</h3>
                <Button background={'transparent'} border={'none'} positionIcon={'right'}>Button</Button>
            </div>
            <div className='blogHome__info'>
                <div className='left'>
                    <Blog large={true} tag={authorInfo[0].tag} title={authorInfo[0].title}
                        name={authorInfo[0].name}
                        date={authorInfo[0].date}
                    />
                </div>
                <div className='middle'>
                    <Blog medium={true} tag={authorInfo[1].tag} title={authorInfo[1].title}
                        name={authorInfo[1].name}
                        date={authorInfo[1].date}
                    />
                </div>
                <div className='right'>
                    <Blog small={true} title={authorInfo[2].title}
                        name={authorInfo[2].name}
                        date={authorInfo[2].date}
                    />
                    <Blog small={true} title={authorInfo[3].title}
                        name={authorInfo[3].name}
                        date={authorInfo[3].date}
                    />
                    <Blog small={true} title={authorInfo[4].title}
                        name={authorInfo[4].name}
                        date={authorInfo[4].date}
                    />
                </div>
            </div>
        </div>
    );
}
