import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { History, LocationState } from 'history';
import HttpServices, { httpStatus } from '@/services/HttpServices';
import * as Style from './style';

interface IProps {
    history: History<LocationState>
}

const UserAvatar = ({ history }: IProps) => {
    const handleLogout = async () => {
        const httpServices = HttpServices();
        try {
            const request = {
                url: '/logout',
                method: 'post'
            };
            const { status } = await httpServices.exec(request);
            if (status === httpStatus.Success) {
                history.push('/');
            }
        } catch (error) {

        }
    };

    const menu = (
        <Menu
            items={[
                // {
                //     label: <a href="https://www.antgroup.com">1st menu item</a>,
                //     key: '0',
                // },
                // {
                //     label: <a href="https://www.aliyun.com">2nd menu item</a>,
                //     key: '1',
                // },
                {
                    type: 'divider',
                },
                {
                    label: 'Logout',
                    key: '3',
                    onClick: () => handleLogout()
                },
            ]}
        />
    );
    return (
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight" arrow={{ pointAtCenter: false }}>
            <a onClick={e => e.preventDefault()}>
                <Style.Container>
                    <Avatar size="large" icon={<UserOutlined />} />
                    <div className='name'>John Doe</div>
                    <div className='arrow'><DownOutlined /></div>
                </Style.Container>
            </a>
        </Dropdown>
    );
}

export default UserAvatar;