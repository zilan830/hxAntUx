//所有字段
const riskCom = [
  {
    title: "基本信息",
    type: "title"
  },
  {
    title: "风险名称",
    dataIndex: "riskName",
  },
  {
    title: "登记人",
    dataIndex: "riskRegName",
  },
  {
    title: "登记日期",
    dataIndex: "riskRegTime",
  },
  {
    title: "风险点序号",
    dataIndex: "riskID",
  },
  {
    title: "风险点所在部门",
    dataIndex: "riskDepart",
  },
  {
    title: '是否重大危险源',
    dataIndex: 'dangerSource',
    option: [
      {
        dataIndex: "是"
      },
      {
        dataIndex: "否"
      }
    ]
  }, {
    title: '重大危险源级别',
    dataIndex: 'dangerLevel',
    option: [
      {
        dataIndex: "一级"
      },
      {
        dataIndex: "二级"
      },
      {
        dataIndex: "三级"
      },
      {
        dataIndex: "四级"
      }
    ]
  },
  {
    title: "风险描述",
    dataIndex: "riskDesc",
  },
  {
    title: "风险评估",
    type: "title"
  },
  {
    name: "风险特征产生条件",
    value: "riskCondition",
    type: "input",
  },
  {
    title: "事故发生的可能性",
    dataIndex: "riskPossible",
  },
  {
    title: "级别",
    dataIndex: "riskPossibleLevel",
    option: [
      {
        dataIndex: '极有可能发生'
      }, {
        dataIndex: '很可能发生'
      }, {
        dataIndex: '可能发生'
      }, {
        dataIndex: '较不可能发生'
      }, {
        dataIndex: '基本不可能发生'
      },
    ]
  }, {
    title: "事故发生的可致后果",
    dataIndex: "riskResult",
  },
  {
    title: "级别",
    dataIndex: "riskResultLevel",
    option: [
      {
        dataIndex: '影响特别重大'
      }, {
        dataIndex: '影响重大'
      }, {
        dataIndex: '影响较大'
      }, {
        dataIndex: '影响一般'
      }, {
        dataIndex: '影响很小'
      },
    ]
  },
  {
    title: "评估人",
    dataIndex: "riskAssessName",
  },
  {
    title: "评估时间",
    dataIndex: "riskAssessTime",
  },
  {
    title: "风险分类",
    type: "title"
  },
  {
    title: "风险分类",
    dataIndex: "riskGround",
    type: "select",
    option: [
      {
        value: "安全生产相关证照"
      },
      {
        value: "安全生产管理机构设置情况"
      },
      {
        value: "“三同时”管理"
      },
      {
        value: "安全生产责任制"
      },
      {
        value: "安全培训"
      },
      {
        value: "事故隐患排查"
      },
      {
        value: "应急救援及演练"
      },
      {
        value: "外包单位及管理"
      },
      {
        value: "职业健康防护"
      }
    ]
  }, {
    title: "划分依据",
    dataIndex: "riskCateBasis",
    type: "input",
  },
  {
    title: "划分人",
    dataIndex: "riskCateName",
  },
  {
    title: "划分时间",
    dataIndex: "riskCateTime",
  },
  {
    title: "风险分级",
    type: "title"
  },
  {
    title: "风险级别",
    dataIndex: "riskLevel",
    option: [
      {
        dataIndex: '极有可能发生'
      }, {
        dataIndex: '很可能发生'
      }, {
        dataIndex: '可能发生'
      }, {
        dataIndex: '较不可能发生'
      }, {
        dataIndex: '基本不可能发生'
      },
    ]
  },
  {
    title: "评估人",
    dataIndex: "riskLevelName",
  },
  {
    title: "评估时间",
    dataIndex: "riskLevelTime",
  },
  {
    title: "风险防范",
    type: "title"
  },
  {
    title: "管控措施",
    dataIndex: "riskMeasure",
  },
  {
    name: "负责部门",
    value: "riskManDepart",
    type: "input",
  },
  {
    name: "负责人",
    value: "riskManger",
    type: "input",
    span: 12,
  },
  {
    name: "负责人联系电话",
    value: "riskManTel",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "input",
  }, {
    title: "制定人",
    dataIndex: "riskDeveloper",
  },
  {
    title: "制定时间",
    dataIndex: "riskDevTime",
  },
  {
    title: "风险上报",
    type: "title"
  },
  {
    title: "上报单元",
    dataIndex: "riskReportUnit",
  },
  {
    name: "主管（监管）单位、街道",
    value: "riskStreet",
  },
  {
    title: "上报人",
    dataIndex: "riskReporter",
  },
  {
    title: "上报时间",
    dataIndex: "riskReportTime",
  },
];

const formColumn = [
  {
    name: "基本信息",
    type: "title"
  },
  {
    name: "风险名称",
    value: "riskName",
    type: "input",
  },
  {
    name: "风险点序号",
    value: "riskID",
    type: "input",
    span: 12,
  },
  {
    name: "风险点所在部门",
    value: "riskDepart",
    type: "input",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
  },
  {
    name: '是否重大危险源',
    value: 'dangerSource',
    span: 12,
    type: "select",
    option: [
      {
        value: "是"
      },
      {
        value: "否"
      }
    ]
  }, {
    name: '重大危险源级别',
    value: 'dangerLevel',
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "select",
    option: [
      {
        value: "一级"
      },
      {
        value: "二级"
      },
      {
        value: "三级"
      },
      {
        value: "四级"
      }
    ]
  },
  {
    name: "风险描述",
    value: "riskDesc",
    type: "input",
  },
  {
    name: "登记人",
    value: "riskRegName",
    type: "input",
    span: 12,
  },
  {
    name: "登记日期",
    value: "riskRegTime",
    type: "date",
    span: 12,
    style: {"borderLeft": "none"},
  },
  {
    name: "风险评估",
    type: "title"
  },
  {
    name: "风险特征产生条件",
    value: "riskCondition",
    type: "input",
  }, {
    name: "事故发生的可能性",
    value: "riskPossible",
    type: "input",
    span: 12,
  },
  {
    name: "级别",
    value: "riskPossibleLevel",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "select",
    option: [
      {
        value: '极有可能发生'
      }, {
        value: '很可能发生'
      }, {
        value: '可能发生'
      }, {
        value: '较不可能发生'
      }, {
        value: '基本不可能发生'
      },
    ]
  }, {
    name: "事故发生的可致后果",
    value: "riskResult",
    type: "input",
    span: 12,
  },
  {
    name: "级别",
    value: "riskResultLevel",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "select",
    option: [
      {
        value: '影响特别重大'
      }, {
        value: '影响重大'
      }, {
        value: '影响较大'
      }, {
        value: '影响一般'
      }, {
        value: '影响很小'
      },
    ]
  },
  {
    name: "评估人",
    value: "riskAssessName",
    type: "input",
    span: 12,
  },
  {
    name: "评估时间",
    value: "riskAssessTime",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "date",
  },
  {
    name: "风险分类",
    type: "title"
  },
  {
    name: "风险分类",
    value: "riskGround",
    type: "select",
    option: [
      {
        value: "安全生产相关证照"
      },
      {
        value: "安全生产管理机构设置情况"
      },
      {
        value: "“三同时”管理"
      },
      {
        value: "安全生产责任制"
      },
      {
        value: "安全培训"
      },
      {
        value: "事故隐患排查"
      },
      {
        value: "应急救援及演练"
      },
      {
        value: "外包单位及管理"
      },
      {
        value: "职业健康防护"
      }
    ]
  }, {
    name: "划分依据",
    value: "riskCateBasis",
    type: "input",
  },
  {
    name: "划分人",
    value: "riskCateName",
    type: "input",
    span: 12,
  },
  {
    name: "划分时间",
    value: "riskCateTime",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "date",
  },
  {
    name: "风险分级",
    type: "title"
  },
  {
    name: "风险级别",
    value: "riskLevel",
    type: "select",
    option: [
      {
        value: '极有可能发生'
      }, {
        value: '很可能发生'
      }, {
        value: '可能发生'
      }, {
        value: '较不可能发生'
      }, {
        value: '基本不可能发生'
      },
    ]
  },
  {
    name: "评估人",
    value: "riskLevelName",
    type: "input",
    span: 12,
  },
  {
    name: "评估时间",
    value: "riskLevelTime",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "date",
  },
  {
    name: "风险防范",
    type: "title"
  },
  {
    name: "管控措施",
    value: "riskMeasure",
    type: "input",
  },
  {
    name: "负责部门",
    value: "riskManDepart",
    type: "input",
  },
  {
    name: "负责人",
    value: "riskManger",
    type: "input",
    span: 12,
  },
  {
    name: "负责人联系电话",
    value: "riskManTel",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
    type: "input",
  }, {
    name: "制定人",
    value: "riskDeveloper",
    type: "input",
    span: 12,
  },
  {
    name: "制定时间",
    value: "riskDevTime",
    span: 12,
    style: {"borderLeft": "none"},
    type: "date",
  },
  {
    name: "制定时间",
    value: "riskDevTime",
  },
  {
    name: "风险上报",
    type: "title"
  },
  {
    name: "上报单元",
    value: "riskReportUnit",
    type: "input",
    span: 12,
  },
  {
    name: "主管(监管)单位、街道",
    value: "riskStreet",
    type: "input",
    span: 12,
    style: {"borderLeft": "none", "borderBottom": "none"},
  },
  {
    name: "上报人",
    value: "riskReporter",
    type: "input",
    span: 12,
  },
  {
    name: "上报时间",
    value: "riskReportTime",
    type: "date",
    span: 12,
    style: {"borderLeft": "none"},
  },
];

export {formColumn};

