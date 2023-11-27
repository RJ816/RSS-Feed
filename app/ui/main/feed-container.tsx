import React, { useEffect, useState } from 'react';
import Item from '../../lib/item-class';
import PopulateFeed from '../../lib/populate-feed';

export default function FeedContainer() {
    const [feedItems, setFeedItems] = useState<Item[]>([]);

    useEffect(() => {
        async function fetchData() {
            const items = PopulateFeed();
            setFeedItems(items);
        }

        fetchData();
    }, []);

    return (
        <div id="feedContainer">
            {feedItems.map((item, index) => (
                <a key={index} href={item.getLink()} target="_blank">
                    {item.getTitle()}
                </a>
            ))}
        </div>
    );
}

