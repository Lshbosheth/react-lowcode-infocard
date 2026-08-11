import type { InfoCardConfig, InfoCardAction } from "../types/config.ts";

type InfoCardPreviewProps = {
  config: InfoCardConfig;
};
function InfoCardPreview({ config }: InfoCardPreviewProps) {
  // const statusColors = {
  //   default: "#dddddd",
  //   success: "#52c41a",
  //   warning: "#faad14",
  //   danger: "#f5222d",
  // };

  // const statusColor = statusColors[config.statusType];

  // 根据layout和size决定样式
  const isCompact = config.layout === "compact";
  const isSmall = config.size === "small";

  const cardPadding = isSmall ? "12px" : "16px";
  const titleSize = isSmall ? "16px" : "18px";
  const textSize = isSmall ? "13px" : "14px";

  const handleBtnClick = (clickAction: InfoCardAction["clickAction"]) => {
    console.log(clickAction);
    switch (clickAction) {
      case "alert":
        alert("触发警告");
        break;
      case "log":
        console.log("触发日志");
        break;
      case "copy":
        navigator.clipboard.writeText("复制内容");
        break;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: config.showBorder ? "1px solid #e0e0e0" : "none",
        borderRadius: config.borderRadius,
        padding: cardPadding,
        maxWidth: "400px",
        boxSizing: "border-box",
        ["--accent-color" as any]: config.accentColor,
      }}
    >
      {/*标题栏*/}
      <div
        style={{
          display: "flex",
          flexDirection: isCompact ? "row" : "column",
          justifyContent: isCompact ? "space-between" : "flex-start",
          alignItems: isCompact ? "center" : "flex-start",
          marginBottom: "12px",
          gap: isCompact ? "12px" : "4px",
        }}
      >
        <div style={{ flex: isCompact ? 1 : "none" }}>
          <h3 style={{ margin: 0, fontSize: titleSize }}>{config.title}</h3>
          <p style={{ margin: "4px 0 0", color: "#666", fontSize: textSize }}>
            {!isCompact && (
              <span style={{ margin: "4px 0 0", color: "#66", fontSize: textSize }}>
                {config.subTitle}
              </span>
            )}
          </p>
        </div>
        <span
          className="status"
          style={{
            padding: "4px 12px",
            color: "#fff",
            borderRadius: config.borderRadius,
            fontSize: "12px",
          }}
        >
          {config.statusText}
        </span>
      </div>

      {/*紧凑模式下副标题放在字段前面*/}
      {isCompact && config.subTitle && (
        <p style={{ margin: "0 0 8px", color: "#666", fontSize: textSize }}>{config.subTitle}</p>
      )}
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
              <span style={{ color: "#999", fontSize: textSize }}>{field.label}:</span>
              <span style={{ fontSize: textSize }}>{field.value}</span>
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
                borderRadius: config.borderRadius,
                cursor: "pointer",
                fontSize: "14px",
              }}
              onClick={() => handleBtnClick(action.clickAction)}
            >
              {action.text}
            </button>
          ))}
      </div>
    </div>
  );
}
export default InfoCardPreview;
