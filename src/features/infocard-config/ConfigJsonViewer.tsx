import { useMemo } from "react";
import type { InfoCardConfig } from "../../types/config.tx";

type ConfigJsonViewerProps = {
  config: InfoCardConfig;
};

export default function ConfigJsonViewer({ config }: ConfigJsonViewerProps) {
  const formattedJson = useMemo(() => {
    return JSON.stringify(config, null, 2);
  }, [config]);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedJson);
    alert("配置已复制到剪贴板");
  };

  const handleDownload = () => {
    const blob = new Blob([formattedJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "infoCard-config.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBotton: "8px",
        }}
      >
        <h3>配置JSON</h3>
        <div>
          <button
            onClick={handleCopy}
            style={{
              padding: "4px 12px",
              backgroundColor: "#52c41a",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            复制
          </button>
          <button
            onClick={handleDownload}
            style={{
              marginLeft: "8px",
              padding: "4px 12px",
              backgroundColor: "rgb(24, 144, 255)",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            下载
          </button>
        </div>
      </div>

      <pre
        style={{
          backgroundColor: "#f5f5f5",
          border: "1px solid #d9d9d9",
          backgroundRadius: "4px",
          padding: "12px",
          fontSize: "12px",
          lineHeight: "1.5",
          overflow: "auto",
          maxHeight: "400px",
          margin: "0",
        }}
      >
        {formattedJson}
      </pre>
    </div>
  );
}
