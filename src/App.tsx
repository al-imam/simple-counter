import Counter from "./components/Counter";

function App() {
  return (
    <div
      style={{
        width: "var(--gap-inline)",
        margin: "0 auto",
        padding: "1rem 0 2rem",
      }}
    >
      <h1>
        <a
          style={{
            color: "var(--gray-8)",
            fontSize: "2rem",
            textDecoration: "underline var(--gray-8)",
          }}
          href="https://github.com/al-imam"
        >
          simple-counter
        </a>
      </h1>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplate: "auto / repeat( auto-fit, minmax(300px, 1fr) )",
          alignContent: "center",
        }}
      >
        <Counter add={1} sub={1} />
        <Counter add={2} sub={2} />
        <Counter add={3} sub={3} />
        <Counter add={4} sub={4} />
      </div>
    </div>
  );
}

export default App;
