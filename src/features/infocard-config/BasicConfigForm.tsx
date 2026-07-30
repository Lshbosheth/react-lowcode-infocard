import type { InfoCardAction, InfoCardConfig, InfoCardField } from "../../types/config.ts";

type BasicConfigFormProps = {
  config: InfoCardConfig;
  onChange: (config: {
    title: string;
    subTitle: string;
    statusText: string;
    statusType: "default" | "success" | "warning" | "danger";
    companyType: "VIP" | "Normal" | "keyAccount";
    showBorder: boolean;
    layout: "vertical" | "compact";
    size: "small" | "medium";
    accentColor: string;
    fields: InfoCardField[];
    actions: InfoCardAction[];
  }) => void;
};

export default function BasicConfigForm({ config, onChange }: BasicConfigFormProps) {
  return (
    <div>
      <h3 style={{ marginTop: "0" }}>基础信息</h3>

      {/*标题*/}
      <div style={{ marginBottom: "16px" }}>
        <label>标题</label>
        <input
          type="text"
          value={config.title}
          onChange={(e) =>
            onChange({
              ...config,
              title: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: "6px 8px",
            border: "1px solid #d9d9d9",
            borderRadius: "4px",
            fontSize: "14px",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/*副标题*/}
      <div style={{ marginBottom: "16px" }}>
        <label>副标题</label>
        <input
          type="text"
          value={config.subTitle}
          onChange={(e) =>
            onChange({
              ...config,
              subTitle: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: "6px 8px",
            border: "1px solid #d9d9d9",
            borderRadius: "4px",
            fontSize: "14px",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/*状态文案*/}
      <div style={{ marginBottom: "16px" }}>
        <label>状态文案</label>
        <input
          type="text"
          value={config.statusText}
          onChange={(e) =>
            onChange({
              ...config,
              statusText: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: "6px 8px",
            border: "1px solid #d9d9d9",
            borderRadius: "4px",
            fontSize: "14px",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/*状态类型*/}
      <div style={{ marginBottom: "16px" }}>
        <label>状态类型</label>
        <select
          value={config.statusType}
          onChange={(e) =>
            onChange({
              ...config,
              statusType: e.target.value as InfoCardConfig["statusType"],
            })
          }
          style={{
            width: "100%",
            padding: "6px 8px",
            border: "1px solid #d9d9d9",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          <option value="default">默认(灰色)</option>
          <option value="success">成功(绿色)</option>
          <option value="warning">警告(黄色)</option>
          <option value="danger">危险(红色)</option>
        </select>
      </div>

      {/*是否显示边框*/}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
          <input
            type="checkbox"
            checked={config.showBorder}
            onChange={(e) =>
              onChange({
                ...config,
                showBorder: e.target.checked,
              })
            }
            style={{
              marginRight: "8px",
            }}
          />
          是否显示边框
        </label>
      </div>

      {/*公司类型*/}
      <div style={{ marginBottom: "16px" }}>
        <label>公司类型</label>
        <select
          value={config.companyType}
          onChange={(e) =>
            onChange({
              ...config,
              companyType: e.target.value as InfoCardConfig["companyType"],
            })
          }
          style={{
            width: "100%",
            padding: "6px 8px",
            border: "1px solid #d9d9d9",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          <option value="default">一般客户</option>
          <option value="success">重要客户</option>
          <option value="warning">VIP</option>
        </select>
      </div>
    </div>
  );
}
