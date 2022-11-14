import Counter from "./components/Counter";

function App() {
  return (
    <div
      style={{
        maxWidth: 880,
        padding: "16px 8px 0",
        display: "grid",
        gridTemplate: "auto / 1fr 1fr",
      }}
    >
      <h1
        style={{
          gridColumn: "1 / -1",
          margin: "0 0 0.5rem 1rem",
        }}
      >
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
      <Counter add={1} sub={1} />
      <Counter add={8} sub={8} />
      <Counter add={10} sub={10} />
      <Counter add={2} sub={2} />
    </div>
  );
}

export default App;
