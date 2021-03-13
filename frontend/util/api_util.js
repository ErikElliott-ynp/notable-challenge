export const fetchPhysicians = () => {
    return $.ajax({
        url: `/api/physicians`
    });
};

export const fetchPhysician = (physicianId) => {
    return $.ajax({
        url: `/api/physicians/${physicianId}`
    })
}