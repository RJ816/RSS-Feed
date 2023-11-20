import React, { useState } from "react";
import useFetch from "../../../network/http-request.tsx";

function Form() {
    const [url, setUrl] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (url.trim() === "") {
            alert("Please enter a non-empty URL");
          } else {
            try {
                const response = await useFetch(url); //check
                // if (response.ok) {
                //     alert(`URL successfully sent to the server: ${url}`);
                // } else {
                //     alert('Failed to send URL to the server');
                // }
            } catch (error) {
                console.error('Error sending URL to the server:', error);
            }
          }
      };

    return (<form onSubmit={handleSubmit}>
        <label htmlFor="url">Add RSS URL</label>
        <input 
            name="url" id="url" 
            type="url" 
            placeholder="Enter RSS URL" 
            autoComplete="off"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
        />
        <input type="submit" /> 
    </form>);
}

export default Form;