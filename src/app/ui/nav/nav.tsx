import AddRss from "./links/add-rss";
import Home from "./links/home";
import Settings from "./links/settings";

export default function Nav() {
    return <nav>
        <Home />
        <AddRss />
        <Settings />
    </nav>;
}