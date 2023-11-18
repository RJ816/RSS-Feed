import React from "react";

function Form() {
    return (<form>
        <label htmlFor="url">Add RSS URL</label>
        <input name="url" id="url" type="url" />
        <button id="submit" type="button">Submit</button>
    </form>);
}

export default Form;