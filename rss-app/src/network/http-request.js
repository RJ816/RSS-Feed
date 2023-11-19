const sendUrl = async (url) => {
    try {
        const response = await fetch("http://localhost:8080/save-url", {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `url=${encodeURIComponent(url)}`, //check
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};

export default sendUrl;
