import React from 'react';
import { Menu } from 'antd';
import Header from './header';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {withRouter} from 'umi';

const { SubMenu } = Menu;

function Layout({children, location}) {
    return (
      <div>
        <Header location={location}></Header>
        <div>
          <div>
            {children}
          </div>
        </div>
      </div>
    );
}

export default withRouter(Layout)