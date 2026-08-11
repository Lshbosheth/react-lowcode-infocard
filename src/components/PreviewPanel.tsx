import InfoCardPreview from "./InfoCardPreview.tsx";
import ConfigJsonViewer from "../features/infocard-config/ConfigJsonViewer.tsx";
import type { InfoCardConfig } from "../types/config.ts";
type PreviewPanelProps = {
  config: InfoCardConfig;
};

export default function PreviewPanel({ config }: PreviewPanelProps) {
  return (
    <div style={{ flex: "1", padding: "20px", backgroundColor: "#fafafa", overflowY: "auto" }}>
      <h2>实时预览</h2>
      <InfoCardPreview config={config} />
      <hr style={{ margin: "32px 0", border: "none", borderTop: "1px solid #e0e0e0" }} />
      <ConfigJsonViewer config={config} />
    </div>
  );
}
