const sendUrl = async (url) => {
    try {
        const response = await fetch(url); //check
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};

export default sendUrl;