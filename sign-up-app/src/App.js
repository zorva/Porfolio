import InpGroup from './inputGroup';
function App() {
  return (
    <div className="App">
      <form className="mainForm">
      <h1>Contact info</h1>
      <InpGroup></InpGroup>
      <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
