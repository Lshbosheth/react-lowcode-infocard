export type InfoCardConfig = {
  title: string;
  subTitle: string;
  statusText: string;
  statusType: "default" | "success" | "warning" | "danger";
  companyType: "VIP" | "Normal" | "keyAccount";
  showBorder: boolean;
  layout: "vertical" | "compact";
  size: "small" | "medium";
  borderRadius: "0px" | "4px" | "8px" | "16px";
  accentColor: string;
  fields: InfoCardField[];
  actions: InfoCardAction[];
};

export type InfoCardField = {
  id: string;
  label: string;
  value: string;
  visible: boolean;
};

export type InfoCardAction = {
  id: string;
  text: string;
  type: "primary" | "default";
  visible: boolean;
};

export const initialInfoCardConfig: InfoCardConfig = {
  title: "项目信息",
  subTitle: "低代码配置页项目",
  statusText: "已完成",
  statusType: "warning",
  companyType: "Normal",
  showBorder: true,
  layout: "vertical",
  size: "medium",
  borderRadius: "0px",
  accentColor: "#52c41a",
  fields: [
    {
      id: "1",
      label: "客户名称",
      value: "xxx公司",
      visible: true,
    },
    {
      id: "2",
      label: "客户地址",
      value: "xxx路xxx号",
      visible: true,
    },
    {
      id: "3",
      label: "客户电话",
      value: "123456789",
      visible: true,
    },
    {
      id: "4",
      label: "客户邮箱",
      value: "xxx@xxx.com",
      visible: true,
    },
  ],
  actions: [
    {
      id: "1",
      text: "查看详情",
      type: "primary",
      visible: true,
    },
    {
      id: "2",
      text: "编辑",
      type: "default",
      visible: false,
    },
  ],
};

export type ComponentSidebarConfig = {
  components: string[];
  nowComponent: string;
};

export const initialComponentSidebar: ComponentSidebarConfig = {
  components: ["InfoCard", "starCard"],
  nowComponent: "InfoCard",
};
