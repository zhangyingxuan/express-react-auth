import {Table, Card} from 'antd';

const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  
function Users({
    list,
    loading
  }) {

    return (<Card bordered={false}
        title={"用戶管理"}>
    <Table dataSource={dataSource} 
            columns={columns} 
            loading={loading.effects['users/fetch']}/>
        </Card>)

  function mapStateToProps(state:object) {
      const {list} = state.users
      const loading = state.loading
      return {
          list,
          loading
        }
  }

  export default connect(mapStateToProps)(Users);