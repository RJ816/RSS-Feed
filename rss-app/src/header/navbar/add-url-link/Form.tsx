import React, { useState } from "react";
//import fs from "fs";

function Form() {
    const [url, setUrl] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (url.trim() === "") {
            alert("Please enter a non-empty URL");
          } else {
            alert(`The url you entered was: ${url}`);
            // Now you can proceed with any further actions, such as making a request to the server.
          }
      }

    return (<form onSubmit={handleSubmit}>
        <label htmlFor="url">Add RSS URL</label>
        <input 
            name="url" id="url" 
            type="url" 
            placeholder="Enter RSS URL" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
        />
        <input type="submit" /> 
    </form>);
}

export default Form;