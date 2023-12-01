export default function FeedCutoff() {
    const currentDate = new Date();
    
    // Subtract 30 days from the current date
    const cutOff = new Date(currentDate);
    cutOff.setDate(currentDate.getDate() - 30);
    
    // Get the ISO format for the date 30 days ago
    const isoDate = cutOff.toISOString();

    return isoDate;
}
