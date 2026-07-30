import { useState } from "react";
import ComponentSidebar from "./ComponentSidebar.tsx";
import ConfigPanel from "./ConfigPanel.tsx";
import PreviewPanel from "./PreviewPanel.tsx";
import {
    type InfoCardConfig,
    initialInfoCardConfig,
    initialComponentSidebar,
    type ComponentSidebarConfig
} from "../types/config.ts";

export default function LowCodeConfigPage() {
    const [config, setConfig] = useState<InfoCardConfig>(initialInfoCardConfig);
    const [component, setComponent] = useState<ComponentSidebarConfig>(initialComponentSidebar);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/*组件列表*/}
      <ComponentSidebar component={component} onChange={setComponent}/>
      {/*配置面板*/}
      <ConfigPanel config={config} onChange={setConfig} />
      {/*实时预览*/}
      <PreviewPanel config={config} />
    </div>
  );
}
