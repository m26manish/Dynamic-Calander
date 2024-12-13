import React, { useState } from 'react';
import { Button } from './ui/button';

const EventModal = ({ date, events, onSave, onDelete, onClose }) => {
    const [eventName, setEventName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleSave = () => {
        if (!eventName || !startTime || !endTime || startTime >= endTime) {
            alert('Invalid event details!');
            return;
        }

        onSave({
            name: eventName,
            start: startTime,
            end: endTime,
            description,
        });

        // Clear inputs after saving
        setEventName('');
        setStartTime('');
        setEndTime('');
        setDescription('');
    };

    const handleDelete = () => {
        if (selectedEvent) {
            onDelete(selectedEvent);
            setSelectedEvent(null);
        }
    };

    return (
        <div className="EventModal">
            <div className="EventModal-header">
                <h3 className="text-lg font-bold">
                    Events for {date ? date.toDateString() : ''}
                </h3>
            </div>
            <div className="EventModal-body">
                <ul>
                    {events.map((event, index) => (
                        <li key={index} className="mb-2">
                            <strong>{event.name}</strong> ({event.start} - {event.end})
                            <p>{event.description}</p>
                            <button
                                onClick={() => setSelectedEvent(event)}
                                className="text-blue-500 underline"
                            >
                                Select
                            </button>
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    placeholder="Event Name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="w-full p-2 border mb-2"
                />
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full p-2 border mb-2"
                />
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full p-2 border mb-2"
                />
                <textarea
                    placeholder="Description (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border mb-2"
                />
            </div>
            <div className="EventModal-footer">
                <Button onClick={handleSave} className="bg-green-500 text-white">
                    Save
                </Button>
                <Button
                    onClick={handleDelete}
                    className="bg-red-500 text-white ml-2"
                >
                    Delete
                </Button>
                <Button onClick={onClose} className="bg-gray-500 text-white ml-2">
                    Close
                </Button>
            </div>
        </div>
    );
};

export default EventModal;
