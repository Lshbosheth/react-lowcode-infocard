function InfoCardPreview() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "400px",
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
          <h3 style={{ margin: 0, fontSize: "18px" }}>客户资料</h3>
          <p style={{ margin: "4px 0 0", color: "#666", fontSize: "14px" }}>描述。。。。。</p>
        </div>
        <span
          style={{
            padding: "4px 12px",
            backgroundColor: "#52c41a",
            color: "#fff",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          状态ing
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
        <div style={{ marginBottom: "8px" }}>
          <span style={{ color: "#999", fontSize: "14px" }}>联系人:</span>
          <span style={{ fontSize: "14px" }}>xxx</span>
        </div>
        <div style={{ marginBottom: "8px" }}>
          <span style={{ color: "#999", fontSize: "14px" }}>手机号:</span>
          <span style={{ fontSize: "14px" }}>xxxxxxxxx</span>
        </div>
        <div style={{ marginBottom: "8px" }}>
          <span style={{ color: "#999", fontSize: "14px" }}>来源:</span>
          <span style={{ fontSize: "14px" }}>xxx</span>
        </div>
      </div>

      {/*操作按钮*/}
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <button
          style={{
            padding: "6px 16px",
            backgroundColor: "#1890ff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          查看详情
        </button>
        <button
          style={{
            padding: "6px 16px",
            backgroundColor: "#fff",
            color: "#333",
            border: "1px solid #d9d9d9",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          新建跟进
        </button>
      </div>
    </div>
  );
}
export default InfoCardPreview;
