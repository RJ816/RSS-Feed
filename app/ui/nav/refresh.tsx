import Link from "next/link";
import RefreshFeed from "../../lib/refresh-feed";

export default function Refresh() {
    RefreshFeed();
    return <Link href="/">Refresh</Link>;
}