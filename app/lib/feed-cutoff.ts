export default function FeedCutoff() {
    const currentDate = new Date();
    const cutOff = currentDate.setDate(currentDate.getDate() - 30);
    // Get the current UTC time in ISO format
    const isoDate = currentDate.toISOString();

    return isoDate;
}