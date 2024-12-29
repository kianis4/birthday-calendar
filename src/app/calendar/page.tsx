import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarPage() {
    return (
        <main>
            <h1>Interactive Calendar</h1>
            <Calendar onClickDay={(date) => alert(date.toDateString())} />
        </main>
    );
}
