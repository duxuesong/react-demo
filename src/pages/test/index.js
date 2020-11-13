import { Table, Tag, Space } from 'antd';
import React, { PureComponent } from 'react'
import EditModal from './components/EditModal'
import styles from './test.less'
class Test extends PureComponent {
  deleteHandle (record, e) {
    console.log(record, e, '点击删除事件')
  }
  editHandle (record) {
    this.EditModal.showModal(record)
    console.log(record, '编辑事件')
  }
  onRef (name, ref) {
    console.log(name, ref, 'onRef--=--')
    this.EditModal = ref
  }
  render () {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag} >
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <span onClick={() => this.editHandle(record)} className={styles.action}>Edit</span>
            <span onClick={e => this.deleteHandle(record, e)} className={styles.action}>Delete</span>
          </Space>
        ),
      },
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
    return (
      <div>
        <Table columns={columns} dataSource={data} />
        <EditModal onRef={this.onRef.bind(this)} />
      </div>
    )
  }
}
export default Test