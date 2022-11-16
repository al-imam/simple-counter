import Counter from "./components/Counter";

function App() {
  return (
    <div
      style={{
        maxWidth: "clamp(320px, 90%, 720px)",
        margin: "0 auto",
        padding: "1rem 0 2rem",
      }}
    >
      <h1>
        <a
          style={{
            color: "2D2E2D",
            fontSize: "1.5rem",
          }}
          href="https://github.com/al-imam"
        >
          simple-counter
        </a>
      </h1>
      <div
        style={{
          display: "grid",
          gap: "16px",
          gridTemplate: "auto / repeat( auto-fit, minmax(300px, 1fr) )",
          alignContent: "center",
        }}
      >
        <Counter add={1} sub={1} />
        <Counter add={8} sub={8} />
        <Counter add={10} sub={10} />
        <Counter add={2} sub={2} />
      </div>
    </div>
  );
}

export default App;
