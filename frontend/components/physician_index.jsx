import React from 'react';
import { fetchPhysicians } from '../util/api_util';
import PhysicianIndexItem from "./physician_index_item";

class PhysicianIndex extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            physiciansArray: []
        };
    }
    componentDidMount() {
        fetchPhysicians()
            .then( allPhysicians => {
                this.setState({
                    physiciansArray: allPhysicians
                })
            });
    }

    render() {
        const physicians = this.state.physiciansArray.map( physician => {
            return <PhysicianIndexItem key={physician.id} physician={physician} />
        });
        return (
            <div className='index-main'>
                <h1 className='notable-header'>Notable</h1>
                <h3>Physicians</h3>
                {physicians}

            </div>
        )
    }
}

export default PhysicianIndex;