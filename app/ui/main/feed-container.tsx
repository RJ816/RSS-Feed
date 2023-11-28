"use client";

import React, { useEffect, useState } from "react";
import Item from "../../lib/item-class";
import PopulateFeed from "../../lib/populate-feed";

export default function FeedContainer() {
    const [feedItems, setFeedItems] = useState<Item[]>([]);

    useEffect(() => {
        async function fetchData() {
            const items = await PopulateFeed();
            setFeedItems(items);
        }
        fetchData();
    }, []);
    
    return (
        <div id="feedContainer">
            {feedItems.map((item, index) => (
                <div key={index}>
                    <a  href={item.link} target="_blank">
                        {item.title}
                    </a>
                </div>
            ))}
        </div>
    );
}

