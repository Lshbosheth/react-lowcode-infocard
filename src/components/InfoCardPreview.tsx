import type { InfoCardConfig } from "../types/config.ts";

type InfoCardPreviewProps = {
  config: InfoCardConfig;
};
function InfoCardPreview({ config }: InfoCardPreviewProps) {
  const statusColors = {
    default: "#dddddd",
    success: "#52c41a",
    warning: "#faad14",
    danger: "#f5222d",
  };

  const statusColor = statusColors[config.statusType];

  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: config.showBorder ? "1px solid #e0e0e0" : "none",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "400px",
        boxSizing: "border-box",
      }}
    >
      {/*标题栏*/}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <div>
          <h3 style={{ margin: 0, fontSize: "18px" }}>{config.title}</h3>
          <p style={{ margin: "4px 0 0", color: "#666", fontSize: "14px" }}>{config.subTitle}</p>
        </div>
        <span
          style={{
            padding: "4px 12px",
            backgroundColor: statusColor,
            color: "#fff",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          {config.statusText}
        </span>
      </div>

      {/*字段列表*/}
      <div
        style={{
          borderTop: "1px solid #f0f0f0",
          paddingTop: "12px",
          marginBottom: "12px",
        }}
      >
        {config.fields
          .filter((field) => field.visible)
          .map((field) => (
            <div key={field.id} style={{ marginBottom: "8px" }}>
              <span style={{ color: "#999", fontSize: "14px" }}>{field.label}:</span>
              <span style={{ fontSize: "14px" }}>{field.value}</span>
            </div>
          ))}
      </div>

      {/*操作按钮*/}
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        {config.actions
          .filter((action) => action.visible)
          .map((action) => (
            <button
              key={action.id}
              style={{
                padding: "6px 16px",
                backgroundColor: action.type === "primary" ? "#1890ff" : "#fff",
                color: action.type === "primary" ? "#fff" : "#333",
                border: action.type === "primary" ? "none" : "1px solid #d9d9d9",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onClick={() => alert(`点击了：${action.text}`)}
            >
              {action.text}
            </button>
          ))}
      </div>
    </div>
  );
}
export default InfoCardPreview;
