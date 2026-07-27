import InfoCardPreview from "./components/InfoCardPreview.tsx";
function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/*组件列表*/}
      <div
        style={{
          flex: "0 0 200px",
          background: "#f5f5f5",
          padding: "20px",
          borderRight: "1px solid #ddd",
        }}
      >
        <h3>组件列表</h3>
        <div
          style={{
            padding: "10px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          infoCard
        </div>
          <div
              style={{
                  padding: "10px",
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginTop: "10px"
              }}
          >
              StatCard
          </div>
      </div>
      {/*配置面板*/}
      <div style={{ flex: "1", padding: "20px", overflowY: "auto" }}>
        <h2>配置面板</h2>
        <p style={{ color: "#999" }}>后续章节会在这里加表单</p>
      </div>
      {/*实时预览*/}
      <div style={{ flex: "1", padding: "20px", backgroundColor: "#fafafa", overflowY: "auto" }}>
        <h2>预览区域</h2>
        <InfoCardPreview />
      </div>
    </div>
  );
}

export default App;
