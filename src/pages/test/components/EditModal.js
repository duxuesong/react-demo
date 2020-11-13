import { Modal, Button } from 'antd';

class EditModal extends React.Component {

  state = {
    visible: false,
    rowData: ''
  };
  componentDidMount () {
    // console.log(this.props, 'props')
    this.props.onRef('EditModal', this)
    console.log(this.props, 'this.props')
  }
  showModal = (record) => {
    console.log(record, '测试，打开模态框')
    this.setState({
      rowData: record
    })
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render () {
    return (
      <>
        <Modal
          title={this.state.rowData.name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>地址：{this.state.rowData.address}</p>
          <p>标签：{this.state.rowData.tags}</p>
          <p>年龄：{this.state.rowData.age}</p>
        </Modal>
      </>
    );
  }
}
export default EditModal