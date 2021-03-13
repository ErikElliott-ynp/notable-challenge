import React from 'react';
import { fetchPhysician } from '../util/api_util';
import AppointmentsIndex from './appointments_index';
 
class PhysicianShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            physician: {},
            appointments: []
        } 
    }
    componentDidMount() {
       this.handlePhysicianFetch();
    }

    handlePhysicianFetch() {
        //possibly fetch all the doctor's information in a more robust app
        fetchPhysician(this.props.match.params.physicianId)
            .then(payload => {
                const appointments = payload.appointments.forEach(appointment => {
                    appointment.time = new Date(appointment.time);
                });
                this.setState({
                    physician: payload.physician,
                    appointments: payload.appointments
                })
            })
    }

    componentDidUpdate(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.handlePhysicianFetch();
        }
    }

    render() {
        const physicianName = this.state.physician.fname + " " + this.state.physician.lname;
        const appointments = this.state.appointments.length ? 
                            <AppointmentsIndex appointments={this.state.appointments} /> 
                            : <div className="no-appointments">No Appointments Today</div>;
        return(
            <div className='show-main'>
                <h1 className='show-header'>Dr. {physicianName}</h1>
                <h4 className='show-email'>{this.state.physician.email}</h4>
                <div className='appointments-table'>
                    <header className='appointments-header'>
                        <span>#</span>
                        <span>Name</span>
                        <span>Time</span>
                        <span>Kind</span>
                    </header>
                    {appointments}
                </div>
            </div>
        )
    }
}

export default PhysicianShow;