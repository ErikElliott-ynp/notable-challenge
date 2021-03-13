json.physician do
    json.extract! @physician, :id, :fname, :lname, :email
end

json.appointments do
    json.array! @physician.appointments do |appointment|
        json.extract! appointment, :id, :physician_id, :patient_id, :kind, :time
        json.patientName "#{appointment.patient.fname} #{appointment.patient.lname}"
    end
end
