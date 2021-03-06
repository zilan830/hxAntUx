import React, {Component, Fragment} from 'react';
import {Table, Modal, Button} from 'antd';
import SearchContent from '../../components/SelfTable/SearchContent';
import SelfForm from '../../components/SelfModule/SelfForm';

/*
* 企业烟花爆竹销毁信息
* */
const dataSource = [
  {
    key: '1',
    name: '朱少青',
    status: '已销毁',
    packages: 10,
    rounds: 32,
    date: '2018-5-2',
    doneDate: '2018-5-4',
    destroyName: '杨选玉',
    destroyDate: '2018-5-4',
    deStatus: '待销毁'
  }, {
    key: '2',
    name: '徐汉兵',
    status: '已销毁',
    packages: 4,
    rounds: 22,
    date: '2018-5-5',
    doneDate: '2018-5-10',
    destroyName: '杨选玉',
    destroyDate: '2018-5-10',
    deStatus: '已销毁'
  }, {
    key: '3',
    name: '鲁少领',
    status: '待销毁',
    packages: 2,
    rounds: 15,
    date: '2018-5-15',
    doneDate: '2018-5-13',
    destroyName: '杨选玉',
    destroyDate: '2018-5-17',
    deStatus: '待销毁'
  }];

const searchColumn = [
  {
    name: "销毁人",
    value: "destroyName",
    type: "input",
  },
  {
    name: "销毁时间",
    value: "destroyTime",
    type: "date",
  },
  {
    name: "状态",
    value: "status",
    type: "select",
    option: [
      {
        value: "待销毁"
      },
      {
        value: "已销毁"
      },
    ]
  },
];

const inSource = [
  {
    fireName: "喷花类",
    fireLevel: "A级",
    fireModel: "xxx",
    fireCategory: "xxx",
    unit: "箱数量(箱/件)",
    fireNum: "2",
    fireNorm: "1*2"
  },
  {
    fireName: "xx类",
    fireLevel: "B级",
    fireModel: "xxx",
    fireCategory: "xxx",
    unit: "箱数量(发/件)",
    fireNum: "4",
    fireNorm: "1*3"
  },
];

export default class DestroyInfo extends Component {
  constructor(props) {
    super(props);
    this.formColumn = [
      {
        name: "基本信息",
        type: "title"
      },
      {
        name: "登记人",
        value: "name",
        type: "input",
        span: 12,
      },
      {
        name: "登记日期",
        value: "deRegDate",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
      },
      {
        name: "销毁人",
        value: "destroyName",
        type: "input",
        span: 12,
      },
      {
        name: "销毁日期",
        value: "destroyDate",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
      },
      {
        name: "销毁原因",
        value: "location",
        type: "input",
      },
      {
        name: "物品信息",
        type: "title"
      },
      {
        type: "add",
        names: [
          {
            name: "烟花爆竹名称",
            type: "input",
            value: "fireName"
          },
          {
            name: "烟花爆竹级别",
            type: "select",
            value: "fireLevel",
            option: [
              {
                value: "A级"
              },
              {
                value: "B级"
              },
              {
                value: "C级"
              }
            ]
          },
          {
            name: "烟花爆竹型号",
            type: "input",
            value: "fireModel"
          },
          {
            name: "烟花爆竹类别",
            type: "input",
            value: "fireCategory"
          },
          {
            name: "计量单位",
            type: "select",
            value: "unit",
            option: [
              {
                value: "箱数量(箱/件)"
              },
              {
                value: "箱数量(发/个)"
              },
            ]
          },
          {
            name: "箱数量",
            type: "input",
            value: "fireNum"
          },
          {
            name: "每箱规格",
            type: "input",
            value: "fireNorm"
          },
        ]
      }
    ];
    this.readColumn = [
      {
        name: "基本信息",
        type: "title"
      },
      {
        name: "登记人",
        value: "name",
        type: "input",
        span: 12,
      },
      {
        name: "登记日期",
        value: "deRegDate",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
      },
      {
        name: "销毁人",
        value: "destroyName",
        type: "input",
        span: 12,
      },
      {
        name: "销毁日期",
        value: "destroyDate",
        type: "date",
        span: 12,
        style: {"borderLeft": "none"},
      },
      {
        name: "销毁原因",
        value: "location",
        type: "input",
      },
      {
        name: "物品信息",
        type: "title"
      },
    ];
    this.columns = [
      {
        title: '销毁人',
        dataIndex: 'destroyName',
        key: 'destroyName',
      }, {
        title: '销毁日期',
        dataIndex: 'destroyDate',
        key: 'destroyDate',
      }, {
        title: '箱数量（箱/件）',
        dataIndex: 'packages',
        key: 'packages',
      }, {
        title: '箱数量（发/个）',
        dataIndex: 'rounds',
        key: 'rounds',
      }, {
        title: '状态',
        dataIndex: 'deStatus',
        key: 'deStatus',
      }, {
        title: '登记人',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '登记日期',
        dataIndex: 'doneDate',
        key: 'doneDate',
      }, {
        title: '操作',
        key: 'operation',
        render: (record, index) => {
          return (
            <span>
          <a style={{"marginRight": "10px"}} href="javascript:void(0)" onClick={() => {
            this.showReadModal(record)
          }}>查看详情</a>
          <a href="javascript:void(0)" onClick={() => {
            this.showModal(record)
          }}>修改</a>
          </span>
          )
        }
      }
    ];
    this.inColumn = [
      {
        title: "烟花爆竹名称",
        dataIndex: "fireName",
        key: "fireName"
      },
      {
        title: "烟花爆竹级别",
        dataIndex: "fireLevel",
        key: "fireLevel",
      },
      {
        title: "烟花爆竹型号",
        dataIndex: "fireModel",
        key: "fireModel",
      },
      {
        title: "烟花爆竹类别",
        dataIndex: "fireCategory",
        key: "fireCategory",
      },
      {
        title: "计量单位",
        dataIndex: "unit",
        key: "unit",
      },
      {
        title: "箱数量",
        dataIndex: "fireNum",
        key: "fireNum",
      },
      {
        title: "每箱规格",
        dataIndex: "fireNorm",
        key: "fireNorm",
      },
    ];
    this.state = {
      readVisible: false,
      visible: false,
      text: ''
    }
  }

  add = () => {
    this.setState({
      visible: true,
      text: ''
    });
  };

  showModal = (text) => {
    this.setState({
      visible: true,
      text
    });
  };

  showReadModal = (text) => {
    this.setState({
      readVisible: true,
      text
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
      readVisible: false,
      text: ''
    });
  };

  handleCancel = (e, type) => {
    if (type === "a") {
      this.refs.infoForm.getForm().resetFields();
    }
    this.setState({
      visible: false,
      readVisible: false,
      text: ''
    });
  };

  render() {
    const {readVisible, visible, text} = this.state;
    return (
      <Fragment>
        <SearchContent searchColumn={searchColumn}/>
        <div style={{"marginBottom": "20px"}}>
          <Button type="primary" onClick={() => {
            this.add()
          }}>新建</Button>
        </div>
        <Table dataSource={dataSource} columns={this.columns} rowKey={(record) => record.key}/>
        <Modal
          title="销毁登记详情"
          visible={readVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1200}
          footer={[]}
        >
          <SelfForm ref="readForm" formColumn={this.readColumn} data={text} editable={false}/>
          <div style={{"border": "1px solid #aed0ea", "borderTop": "none"}}>
            <Table dataSource={inSource} columns={this.inColumn} pagination={false}
                   rowKey={(record) => `inner${record.key}`}/>
          </div>
        </Modal>
        <Modal
          title="新建销毁登记"
          visible={visible}
          onOk={this.handleOk}
          onCancel={(e) => this.handleCancel(e,"a")}
          width={1200}
        >
          <SelfForm ref="infoForm" formColumn={this.formColumn} data={text} editable={true}/>
        </Modal>
      </Fragment>
    );
  }
}
