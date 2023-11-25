import SendUrl from "../lib/send-url";

export default function Form() {
    return (
        <form action={SendUrl}>
            <label htmlFor="url">Enter RSS url:</label>
            <input name="url" id="url" type="url" autoComplete="off" required></input>
            <input type="submit"></input>
        </form>
    );
}