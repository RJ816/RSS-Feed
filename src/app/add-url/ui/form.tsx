
export default function Form() {
    return (
        <form action={SendUrl}>
            <label htmlFor="url">Enter RSS url:</label>
            <input name="url" id="url" type="url" required></input>
            <input type="submit"></input>
        </form>
    );
}