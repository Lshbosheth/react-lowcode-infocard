import type { InfoCardAction, InfoCardConfig } from "../../types/config.ts";
type ActionConfigListProps = {
  config: InfoCardConfig;
  onChange: (config: InfoCardConfig) => void;
};

export default function ActionConfigList({ config, onChange }: ActionConfigListProps) {
  const handleAddAction = () => {
    const newAction: InfoCardAction = {
      id: `action_${Date.now()}`,
      text: "新按钮",
      type: "default",
      visible: true,
      clickAction: "alert",
    };
    onChange({
      ...config,
      actions: [...config.actions, newAction],
    });
  };

  const handleDeleteAction = (id: string) => {
    onChange({
      ...config,
      actions: config.actions.filter((a) => a.id !== id),
    });
  };

  const handleUpdateAction = (id: string, updates: Partial<InfoCardAction>) => {
    console.log(id);
    console.log(updates);
    onChange({
      ...config,
      actions: config.actions.map((a) => (a.id === id ? { ...a, ...updates } : a)),
    });
  };

  return (
    <div>
      <h3>操作按钮</h3>
      {config.actions.map((action) => (
        <div
          key={action.id}
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            padding: "12px",
            marginBottom: "12px",
            backgroundColor: action.visible ? "#fafafa" : "#f0f0f0",
            opacity: action.visible ? 1 : 0.6,
          }}
        >
          {/* 顶部：显隐+删除           */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
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
                checked={action.visible}
                onChange={(e) => handleUpdateAction(action.id, { visible: e.target.checked })}
              />
              显示
            </label>

            <button
              onClick={() => handleDeleteAction(action.id)}
              style={{
                padding: "2px 10px",
                backgroundColor: "#ff4d4f",
                color: "#fff",
                border: "none",
                backgroundRadius: "4px",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              删除
            </button>
          </div>
          {/* 按钮文案 */}
          <div style={{ marginBotton: "8px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
                color: "#666",
              }}
            >
              按钮文案
            </label>
            <input
              type="text"
              value={action.text}
              onChange={(e) => handleUpdateAction(action.id, { text: e.target.value })}
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

          {/* 按钮类型 */}
          <div>
            <label
              style={{
                disable: "block",
                marginBottom: "4px",
                fontSize: "14px",
                color: "#666",
              }}
            >
              按钮类型
            </label>
            <select
              value={action.type}
              onChange={(e) =>
                handleUpdateAction(action.id, { type: e.target.value as InfoCardAction["type"] })
              }
              style={{
                width: "100%",
                padding: "4px 8px",
                border: "1px solid #d9d9d9",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              <option value="primary">主要(蓝底实心)</option>
              <option value="default">默认(白色边框)</option>
            </select>
          </div>

          {/* 点击行为 */}
          <div>
            <label
              style={{
                disable: "block",
                marginBottom: "4px",
                fontSize: "14px",
                color: "#666",
              }}
            >
              点击行为
            </label>
            <select
              value={action.clickAction}
              onChange={(e) =>
                handleUpdateAction(action.id, {
                  clickAction: e.target.value as InfoCardAction["clickAction"],
                })
              }
              style={{
                width: "100%",
                padding: "4px 8px",
                border: "1px solid #d9d9d9",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              <option value="alert">弹窗</option>
              <option value="log">控制台</option>
              <option value="copy">copy</option>
            </select>
          </div>
        </div>
      ))}

      <button
        onClick={handleAddAction}
        style={{
          padding: "6px 16px",
          backgroundColor: "#1890ff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        +新增按钮
      </button>
    </div>
  );
}
