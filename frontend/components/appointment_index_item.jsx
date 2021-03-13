import React from 'react';

const AppointmentsIndexItem = ({appointment, idx}) => {
    const time = appointment.time;
    const dayPeriod = time.getHours() < 12 ? 'AM' : 'PM';
    return (
        
        <div className="appointment-item">
            <span>{idx + 1}</span>
            <span>{appointment.patientName}</span>
            <span>{`${time.getHours()}:${time.getMinutes()}${dayPeriod}`}</span>
            <span>{appointment.kind}</span>
        </div>
    )
}

export default AppointmentsIndexItem;