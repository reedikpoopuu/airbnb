export default function Timer() {
    const hours = new Date().getHours();
    const hoursTwelve = hours % 12;
    let timeOfDay;
    if (hours < 12) {
    timeOfDay = "morning";
    } else if (hours > 12 && hours < 18) {
    timeOfDay = "afternoon";
    } else {
    timeOfDay = "night";
    }
    return(
        <h1>It's {hoursTwelve} o'clock. Good {timeOfDay}!</h1>
    )
}