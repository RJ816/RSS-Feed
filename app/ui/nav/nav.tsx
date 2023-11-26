import AddRss from "./add-rss";
import Home from "./home";
import Refresh from "./refresh";
import Settings from "./settings";

export default function Nav() {
    return <nav>
        <Home />
        <AddRss />
        <Refresh />
        <Settings />
    </nav>;
}