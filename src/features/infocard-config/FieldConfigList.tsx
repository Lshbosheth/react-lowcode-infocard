import type { InfoCardConfig, InfoCardField } from "../../types/config.ts";

type FieldConfigListProps = {
  config: InfoCardConfig;
  onChange: (config: InfoCardConfig) => void;
};

export default function FieldConfigList({ config, onChange }: FieldConfigListProps) {
  const handleAddField = () => {
    const newField: InfoCardField = {
      id: `field_${Date.now()}`,
      label: "新字段",
      value: "",
      visible: true,
    };
    onChange({
      ...config,
      fields: [...config.fields, newField],
    });
  };

  const handleDeleteField = (id: string) => {
    onChange({
      ...config,
      fields: config.fields.filter((field) => field.id !== id),
    });
  };

  const handleUpdateField = (id: string, updates: Partial<InfoCardField>) => {
    onChange({
      ...config,
      fields: config.fields.map((field) => (field.id === id ? { ...field, ...updates } : field)),
    });
  };

  const handleMoveField = (id: string, direction: "top" | "down") => {
    console.log(id);
    console.log(direction);
    const index = config.fields.findIndex((field) => field.id === id);
    if (direction === "top" && index > 0) {
      const newFields = [...config.fields];
      [newFields[index], newFields[index - 1]] = [newFields[index - 1], newFields[index]];
      onChange({
        ...config,
        fields: newFields,
      });
    } else if (direction === "down" && index < config.fields.length - 1) {
      const newFields = [...config.fields];
      [newFields[index], newFields[index + 1]] = [newFields[index + 1], newFields[index]];
      onChange({
        ...config,
        fields: newFields,
      });
    }
  };

  return (
    <div>
      <h3>内容字段</h3>
      {config.fields.map((field) => (
        <div
          key={field.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "12px",
            marginBottom: "12px",
            backgroundColor: field.visible ? "#fff" : "#f0f0f0",
            opacity: field.visible ? 1 : 0.5,
          }}
        >
          {/*顶部:显隐 + 删除*/}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                }}
              >
                <input
                  type="checkbox"
                  checked={field.visible}
                  onChange={(e) => handleUpdateField(field.id, { visible: e.target.checked })}
                />
                显示
              </label>
            </div>

            {/*操作区域*/}
            <div>
              {/*删除按钮*/}
              <button
                onClick={() => handleDeleteField(field.id)}
                style={{
                  backgroundColor: "#ff4d4f",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                删除
              </button>

              {/*上移*/}
              <button
                onClick={() => handleMoveField(field.id, "top")}
                style={{
                  visibility: config.fields.indexOf(field) === 0 ? "hidden" : "visible",
                  marginLeft: "8px",
                  backgroundColor: "#D0D5DD",
                  color: "#667085",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                上移
              </button>
              {/*下移*/}
              <button
                onClick={() => handleMoveField(field.id, "down")}
                style={{
                  visibility:
                    config.fields.indexOf(field) === config.fields.length - 1
                      ? "hidden"
                      : "visible",
                  marginLeft: "8px",
                  backgroundColor: "#D0D5DD",
                  color: "#667085",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                下移
              </button>
            </div>
          </div>

          {/*字段标签*/}
          <div style={{ marginBottom: "8px" }}>
            <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
              字段名
            </label>
            <input
              type="text"
              value={field.label}
              onChange={(e) => handleUpdateField(field.id, { label: e.target.value })}
              style={{
                width: "100%",
                padding: "4px 8px",
                border: "1px solid #d9d9d9",
                borderRadius: "4px",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/*字段值*/}
          <div style={{ marginBottom: "8px" }}>
            <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
              字段值
            </label>
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleUpdateField(field.id, { value: e.target.value })}
              style={{
                width: "100%",
                padding: "4px 8px",
                border: "1px solid #d9d9d9",
                borderRadius: "4px",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
      ))}

      {/*新增按钮*/}
      <button
        onClick={handleAddField}
        style={{
          backgroundColor: "#1890ff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "4px 8px",
          cursor: "pointer",
        }}
      >
        +新增字段
      </button>
    </div>
  );
}
