export function getDateString(date: string | undefined) {
    if (!date) return;

    const months = [
        "januar", "februar", "marts", "april", "maj", "juni",
        "juli", "august", "september", "oktober", "november", "december"
    ];
    const [year, month, day] = date.split("-");
    const dayNumber = parseInt(day, 10);
    const monthName = months[parseInt(month, 10) - 1];
    return `${dayNumber}. ${monthName} ${year}`;
}