const menuList = {};

//一企一档
menuList.menuData1 = [
  {
    name: '企业统计汇总',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: '企业注册数量统计',
        path: 'coStatistics',
      },
      {
        name: '按监管行业分布统计',
        path: 'monitor',
      },
      {
        name: '按所在地区分布统计',
        path: 'monitor1',
      },
      {
        name: '按重大危险源等级统计',
        path: 'monitor2',
      },
      {
        name: '三无企业按地区分布统计',
        path: 'monitor3',
      },
    ],
  },
  {
    name: '表单页',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '基础表单',
        path: 'basic-form',
      },
      {
        name: '分步表单',
        path: 'step-form',
      },
    ],
  },
  {
    name: '列表页',
    icon: 'table',
    path: 'list',
    children: [
      {
        name: '查询表格',
        path: 'table-list',
      },
      {
        name: '标准列表',
        path: 'basic-list',
      },
      {
        name: '卡片列表',
        path: 'card-list',
      },
    ],
  },
  {
    name: '详情页',
    icon: 'profile',
    path: 'profile',
    children: [
      {
        name: '基础详情页',
        path: 'basic',
      },
      {
        name: '高级详情页',
        path: 'advanced',
        authority: 'admin',
      },
    ],
  },
  {
    name: '结果页',
    icon: 'check-circle-o',
    path: 'result',
    children: [
      {
        name: '成功',
        path: 'success',
      },
      {
        name: '失败',
        path: 'fail',
      },
    ],
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    children: [
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
      {
        name: '登录',
        path: 'login',
      },
      {
        name: '注册',
        path: 'register',
      },
      {
        name: '注册结果',
        path: 'register-result',
      },
    ],
  },
];

menuList.menuData2 = [
  {
    name: 'test',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: '分析页',
        path: 'analysis',
      },
      {
        name: '监控页',
        path: 'monitor',
      },
      {
        name: '工作台',
        path: 'workplace',
        // hideInBreadcrumb: true,
        // hideInMenu: true,
      },
    ],
  },
  {
    name: '表单页',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '基础表单',
        path: 'basic-form',
      },
      {
        name: '分步表单',
        path: 'step-form',
      },
      {
        name: '高级表单',
        authority: 'admin',
        path: 'advanced-form',
      },
    ],
  },
  {
    name: '列表页',
    icon: 'table',
    path: 'list',
    children: [
      {
        name: '查询表格',
        path: 'table-list',
      },
      {
        name: '标准列表',
        path: 'basic-list',
      },
      {
        name: '卡片列表',
        path: 'card-list',
      },
      {
        name: '搜索列表',
        path: 'search',
        children: [
          {
            name: '搜索列表（文章）',
            path: 'articles',
          },
          {
            name: '搜索列表（项目）',
            path: 'projects',
          },
          {
            name: '搜索列表（应用）',
            path: 'applications',
          },
        ],
      },
    ],
  },
  {
    name: '详情页',
    icon: 'profile',
    path: 'profile',
    children: [
      {
        name: '基础详情页',
        path: 'basic',
      },
      {
        name: '高级详情页',
        path: 'advanced',
        authority: 'admin',
      },
    ],
  },
  {
    name: '结果页',
    icon: 'check-circle-o',
    path: 'result',
    children: [
      {
        name: '成功',
        path: 'success',
      },
      {
        name: '失败',
        path: 'fail',
      },
    ],
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    children: [
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
      {
        name: '登录',
        path: 'login',
      },
      {
        name: '注册',
        path: 'register',
      },
      {
        name: '注册结果',
        path: 'register-result',
      },
    ],
  },
];

//模块类目
menuList.moduleColumn = [
  {
    name: '一企一档',
    menu: menuList.menuData1,
    icon: 'icon-one',
    color: 'selected',
    selected:true
  },
  {
    name: '隐患排查',
    menu: menuList.menuData2,
    icon: 'icon-two',
    color: 'unSelected',
  },
  {
    name: '行政执法',
    menu: menuList.menuData2,
    icon: 'icon-three',
    color: 'unSelected',
  },
  {
    name: '职业健康',
    menu: menuList.menuData2,
    icon: 'icon-four',
    color: 'unSelected',
  },
  {
    name: '重大危险源',
    menu: menuList.menuData2,
    icon: 'icon-five',
    color: 'unSelected',
  },
  {
    name: '安全标准化',
    menu: menuList.menuData2,
    icon: 'icon-six',
    color: 'unSelected',
  },
  {
    name: '教育培训',
    menu: menuList.menuData2,
    icon: 'icon-seven',
    color: 'unSelected',
  },
  {
    name: '诚信管理',
    menu: menuList.menuData2,
    icon: 'icon-eight',
    color: 'unSelected',
  },
  {
    name: '危化品登记',
    menu: menuList.menuData2,
    icon: 'icon-nine',
    color: 'unSelected',
  },
  {
    name: '事故管理',
    menu: menuList.menuData2,
    icon: 'icon-ten',
    color: 'unSelected',
  },
  {
    name: '应急管理',
    menu: menuList.menuData2,
    icon: 'icon-eleven',
    color: 'unSelected',
  },
  {
    name: '应急值守',
    menu: menuList.menuData2,
    icon: 'icon-twelve',
    color: 'unSelected',
  },
  {
    name: '信用信息共享',
    menu: menuList.menuData2,
    icon: 'icon-thirteen',
    color: 'unSelected',
  },
  {
    name: '电子监察',
    menu: menuList.menuData2,
    icon: 'icon-fourteen',
    color: 'unSelected',
  },
  {
    name: '安全知识库',
    menu: menuList.menuData2,
    icon: 'icon-fifteen',
    color: 'unSelected',
  },
  {
    name: '通知公告',
    menu: menuList.menuData2,
    icon: 'icon-sixteen',
    color: 'unSelected',
  },
  {
    name: '监控监测',
    menu: menuList.menuData2,
    icon: 'icon-seventeen',
    color: 'unSelected',
  },
  {
    name: '中介机构',
    menu: menuList.menuData2,
    icon: 'icon-eighteen',
    color: 'unSelected',
  },
];


module.exports = menuList;