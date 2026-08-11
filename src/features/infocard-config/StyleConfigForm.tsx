import type { InfoCardConfig } from "../../types/config.ts";
type StyleConfigFormProps = {
  config: InfoCardConfig;
  onChange: (config: InfoCardConfig) => void;
};
export default function StyleConfigForm({ config, onChange }: StyleConfigFormProps) {
  return (
    <div>
      <h3>样式设置</h3>

      {/*布局*/}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>布局方式</label>
        <select
          value={config.layout}
          onChange={(e) =>
            onChange({
              ...config,
              layout: e.target.value as InfoCardConfig["layout"],
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
          <option value="vertical">纵向(标准)</option>
          <option value="compact">紧凑(横向)</option>
        </select>
      </div>
      {/*尺寸*/}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>卡片尺寸</label>
        <select
          value={config.size}
          onChange={(e) =>
            onChange({
              ...config,
              size: e.target.value as InfoCardConfig["size"],
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
          <option value="small">小</option>
          <option value="medium">中</option>
        </select>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>强调色</label>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <input
            type="color"
            value={config.accentColor}
            onChange={(e) =>
              onChange({
                ...config,
                accentColor: e.target.value,
              })
            }
            style={{
              width: "50%",
              height: "32px",
              border: "1px solid #D9D9D9",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          />
          <input
            type="text"
            value={config.accentColor}
            onChange={(e) =>
              onChange({
                ...config,
                accentColor: e.target.value,
              })
            }
            style={{
              flex: 1,
              padding: "6px 8px",
              border: "1px solid #d9d9d9",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />
        </div>
      </div>

      {/*卡片圆角*/}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>卡片圆角</label>
        <select
          value={config.size}
          onChange={(e) =>
            onChange({
              ...config,
              borderRadius: e.target.value as InfoCardConfig["borderRadius"],
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
          <option value="0px">0px</option>
          <option value="4px">4px</option>
          <option value="8px">8px</option>
          <option value="16px">16px</option>
        </select>
      </div>
    </div>
  );
}
