import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://www.google.com";
        }}
      >
        window.location.href
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.location.assign("https://www.google.com");
        }}
      >
        {" "}
        window.location.assign
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.google.com", "_blank");
        }}
      >
        {" "}
        window.open("https://www.google.com","_blank");
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.google.com", "_system", "location=yes");
        }}
      >
        {" "}
        window.open("https://www.google.com", "_system", "location=yes");
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.google.com", "_self");
        }}
      >
        {" "}
        window.open("https://www.google.com", "_self", );
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.google.com", "_system");
        }}
      >
        {" "}
        window.open("https://www.google.com", "_system");
      </button>
    </div>
  );
}

export default App;
