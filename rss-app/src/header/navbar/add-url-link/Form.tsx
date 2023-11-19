import React, { useState } from "react";

function Form() {
    const [url, setUrl] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (url.trim() === "") {
            alert("Please enter a non-empty URL");
          } else {
            alert(`The url you entered was: ${url}`);
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