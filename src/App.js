import "./App.module.scss";
import Router from "./pages/Router";

function App() {
  return (
    <div
      style={{
        display: "flex ",
        backgroundColor: "transparent",
        justifyContent: "center",
        width: "100%",
        minHeight: "99.9vh",
        html: "color:pink",
      }}
    >
      <Router />;
    </div>
  );
}

export default App;
