import ManageSection from "./components/ManageSection";
import Provider from "./components/Provider";
function App() {
  return (
    <div className="App">
      <Provider>
        <ManageSection />
      </Provider>
    </div>
  );
}

export default App;
