import React from 'react';
import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {Link} from 'umi';

const { SubMenu } = Menu;

export default class Sider extends React.Component {
	state = {
		theme: 'dark',
		current: '1',
	};

	handleClick = e => {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
	};

	render() {
		return (
			<Menu
				theme={this.state.theme}
				onClick={this.handleClick}
				selectedKeys={[this.state.current]}
				mode="horizontal"
			>
				<Menu.Item key="1">
					<Link to="/users"><MailOutlined />用戶管理</Link>
				</Menu.Item>
				<Menu.Item key="2"><AppstoreOutlined />Option 2</Menu.Item>
				<Menu.Item key="3">Option 3</Menu.Item>
				<Menu.Item key="4">Option 4</Menu.Item>
				<SubMenu
					key="sub4"
					title={
						<span>
							<SettingOutlined />
							<span>Navigation Three</span>
						</span>
					}
				>
					<Menu.Item key="9">Option 9</Menu.Item>
					<Menu.Item key="10">Option 10</Menu.Item>
					<Menu.Item key="11">Option 11</Menu.Item>
					<Menu.Item key="12">Option 12</Menu.Item>
				</SubMenu>
			</Menu>
		);
	}
}