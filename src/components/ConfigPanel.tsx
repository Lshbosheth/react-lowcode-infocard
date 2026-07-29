import type { InfoCardConfig } from "../types/config.ts";
import BasicConfigForm from "../features/infocard-config/BasicConfigForm.tsx";

type ConfigPanelProps = {
  config: InfoCardConfig;
  onChange: (config: InfoCardConfig) => void;
};

export default function ConfigPanel({ config, onChange }: ConfigPanelProps) {
  return (
    <div style={{ flex: "1", padding: "20px", overflowY: "auto" }}>
      <h2>配置面板</h2>
      <BasicConfigForm config={config} onChange={onChange} />
    </div>
  );
}
