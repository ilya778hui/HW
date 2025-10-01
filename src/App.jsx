import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <main style={{ padding: "20px" }}>
        <h1>Hello, React!</h1>
        <p>Добро пожаловать в мой первый проект на React с Vite 🚀</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
