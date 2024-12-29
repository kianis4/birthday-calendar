"use client";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarPage() {
    return (
        <main className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Interactive Calendar</h1>
            <Calendar onClickDay={(date) => alert(date.toDateString())} />
        </main>
    );
}


