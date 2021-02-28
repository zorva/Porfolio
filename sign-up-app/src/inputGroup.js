function InpGroup(){
    return(
        <div className="inputContainer">
        <label htmlFor="UserName">Name</label>
        <input type="text" id="UserName"></input>
        <label htmlFor="mail">Email</label>
        <input type="email" id="mail"></input>
        <label htmlFor="phone">Phone number</label>
        <input type="number" id="phone"></input>
        <label htmlFor="code">Postcode</label>
        <input type="text" id="code"></input>
        </div>
    );
}

export default InpGroup;