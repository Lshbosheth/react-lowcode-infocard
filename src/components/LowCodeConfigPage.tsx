import ComponentSidebar from "./ComponentSidebar.tsx";
import ConfigPanel from "./ConfigPanel.tsx";
import PreviewPanel from "./PreviewPanel.tsx";

export default function LowCodeConfigPage() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/*组件列表*/}
      <ComponentSidebar components={["infoCard", "starCard"]} />
      {/*配置面板*/}
      <ConfigPanel />
      {/*实时预览*/}
      <PreviewPanel title="预览模块1" />
    </div>
  );
}
