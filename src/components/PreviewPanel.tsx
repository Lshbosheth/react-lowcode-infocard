import InfoCardPreview from "./InfoCardPreview.tsx";
import type { InfoCardConfig } from "../types/config.ts";
type PreviewPanelProps = {
  config: InfoCardConfig;
};

export default function PreviewPanel({ config }: PreviewPanelProps) {
  return (
    <div style={{ flex: "1", padding: "20px", backgroundColor: "#fafafa", overflowY: "auto" }}>
      <h2>实时预览</h2>
      <InfoCardPreview config={config} />
    </div>
  );
}
