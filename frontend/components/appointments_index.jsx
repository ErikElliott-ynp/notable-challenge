import React from 'react';
import AppointmentsIndexItem from './appointment_index_item';

const AppointmentsIndex = (props) => {
    const orderedAppointments = props.appointments.sort( (a, b) => a.time - b.time );
    const appointmentItems =  orderedAppointments.map( (appointment, idx) => {
        return <AppointmentsIndexItem idx={idx} key={appointment.id} appointment={appointment} />
    })
    return (
        <div className="appointment-index">
            {appointmentItems}
        </div>
    )
}

export default AppointmentsIndex;