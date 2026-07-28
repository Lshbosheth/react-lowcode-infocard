import InfoCardPreview from "./InfoCardPreview.tsx";
type PreviewPanelProps = {
  title: string;
};

export default function PreviewPanel({ title = "预览区域" }: PreviewPanelProps) {
  return (
    <div style={{ flex: "1", padding: "20px", backgroundColor: "#fafafa", overflowY: "auto" }}>
      <h2>{title}</h2>
      <InfoCardPreview />
    </div>
  );
}
