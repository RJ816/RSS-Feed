import AddRss from "./add-rss";
import Home from "./home";
import Settings from "./settings";

export default function Nav() {
    return <nav>
        <Home />
        <AddRss />
        <Settings />
    </nav>;
}