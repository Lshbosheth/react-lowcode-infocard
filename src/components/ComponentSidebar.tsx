import type { ComponentSidebarConfig } from "../types/config.ts";

type ComponentSidebarProps = {
  component: ComponentSidebarConfig;
  onChange: (component: ComponentSidebarConfig) => void;
};

export default function ComponentSidebar({ component, onChange }: ComponentSidebarProps) {
  const handleClick = (name: string) => {
    console.log("点击了", name);
    onChange({
      ...component,
      nowComponent: name,
    });
  };

  return (
    <div
      style={{
        flex: "0 0 200px",
        background: "#f5f5f5",
        padding: "20px",
        borderRight: "1px solid #ddd",
      }}
    >
      <h3>组件列表</h3>
      {component.components.map((name) => (
        <div
          style={{
            padding: "10px",
            background: component.nowComponent == name ? "#ddd" : "transparent",
            border: "1px solid #ddd",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
          key={name}
          onClick={() => handleClick(name)}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
