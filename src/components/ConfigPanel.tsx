import type { InfoCardConfig } from "../types/config.ts";
import BasicConfigForm from "../features/infocard-config/BasicConfigForm.tsx";
import FieldConfigList from "../features/infocard-config/FieldConfigList.tsx";
import StyleConfigForm from "../features/infocard-config/StyleConfigForm.tsx";
import ActionConfigList from "../features/infocard-config/ActionConfigList.tsx";

type ConfigPanelProps = {
  config: InfoCardConfig;
  onChange: (config: InfoCardConfig) => void;
};

export default function ConfigPanel({ config, onChange }: ConfigPanelProps) {
  const divider = (
    <hr style={{ margin: "24px 0", border: "none", borderTop: "1px solid #e0e0e0" }} />
  );
  return (
    <div style={{ flex: "1", padding: "20px", overflowY: "auto", borderRight: "1px solid #ddd" }}>
      <h2>配置面板</h2>
      <BasicConfigForm config={config} onChange={onChange} />

      {divider}
      <FieldConfigList config={config} onChange={onChange} />

      {divider}
      <StyleConfigForm config={config} onChange={onChange} />

      {divider}
      <ActionConfigList config={config} onChange={onChange} />
    </div>
  );
}
