import React, { useState } from 'react';
import { Button } from './ui/button';
import { getCalendarDays } from '../Utils/LogicCalendar';
import EventModal from './EventModal';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    const handleNextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    const handlePreviousMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };

    const handleDayClick = (date) => {
        setSelectedDate(date);
        setShowModal(true);
    };

    const handleSaveEvent = (date, event) => {
        setEvents((prev) => ({
            ...prev,
            [date.toDateString()]: [...(prev[date.toDateString()] || []), event],
        }));
    };

    const handleDeleteEvent = (date, eventToDelete) => {
        setEvents((prev) => ({
            ...prev,
            [date.toDateString()]: prev[date.toDateString()].filter(
                (event) => event !== eventToDelete
            ),
        }));
    };

    const days = getCalendarDays(currentDate);

    return (
        <div className="calendar-container">
            <header className="calendar-header">
                <Button onClick={handlePreviousMonth}>Previous</Button>
                <h2>
                    {currentDate.toLocaleString('default', { month: 'long' })}{' '}
                    {currentDate.getFullYear()}
                </h2>
                <Button onClick={handleNextMonth}>Next</Button>
            </header>
            <div className="day-names">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                    (day, index) => (
                        <div key={index} className="day-name">
                            {day}
                        </div>
                    )
                )}
            </div>
            <div className="calendar-grid">
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`day-cell ${
                            day.isToday ? 'today' : ''
                        } ${day.date ? 'clickable' : ''} ${
                            events[day.date?.toDateString()] ? 'has-event' : ''
                        }`}
                        onClick={() => day.date && handleDayClick(day.date)}
                    >
                        {day.label}
                        {events[day.date?.toDateString()] && (
                            <span className="event-indicator">•</span>
                        )}
                    </div>
                ))}
            </div>
            {showModal && selectedDate && (
                <EventModal
                    date={selectedDate}
                    events={events[selectedDate.toDateString()] || []}
                    onSave={(event) => handleSaveEvent(selectedDate, event)}
                    onDelete={(event) =>
                        handleDeleteEvent(selectedDate, event)
                    }
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default Calendar;
