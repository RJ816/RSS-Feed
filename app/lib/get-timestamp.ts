export default function getTimestamp() {
    const currentDate = new Date();

    // Get the current UTC time in ISO format
    const isoDate = currentDate.toISOString();

    return isoDate;
}