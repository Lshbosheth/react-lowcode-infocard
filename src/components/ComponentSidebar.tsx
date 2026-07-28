type ComponentSidebarProps = {
  components: string[];
};

export default function ComponentSidebar({ components = ["infoCard"] }: ComponentSidebarProps) {
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
      {components.map((name) => (
        <div
          style={{
            padding: "10px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
