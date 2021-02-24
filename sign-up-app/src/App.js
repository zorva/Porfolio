function App() {
  return (
    <div className="App">
      <form className="mainForm">
      <div id ="identification">
        <label htmlFor="UserName">User Name</label>
        <input type="text" id="UserName"></input>
        </div>
        <div id="contact">
        <label htmlFor="mail">Email</label>
        <input type="email" id="mail"></input>
        </div>
      </form>
    </div>
  );
}

export default App;
