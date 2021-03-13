# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Physician.destroy_all
Appointment.destroy_all
Patient.destroy_all

hibbert = Physician.create!(fname: 'Julius', lname: 'Hibbert', email: 'hibbert@notablehealth.com')
kreiger = Physician.create!(fname: 'Algernop', lname: 'Kreiger', email: 'kreiger@notablehealth.com')
riviera = Physician.create!(fname: 'Nick', lname: 'Riviera', email: 'riviera@notablehealth.com')


sterling = Patient.create!(fname: 'Sterling', lname: 'Archer')
cyril = Patient.create!(fname: 'Cyril', lname: 'Figis')
ray = Patient.create!(fname: 'Ray', lname: 'Gilette')
lana = Patient.create!(fname: 'Lana', lname: 'Kane')
pam = Patient.create!(fname: 'Pam', lname: 'Poovery')


appointment_1 = Appointment.create!(physician: kreiger, patient: sterling, kind: 'New Patient', time: '2021-03-15 08:00:00 PDT')
appointment_2 = Appointment.create!(physician: kreiger, patient: cyril, kind: 'Follow-up', time: '2021-03-15 08:30:00 PDT')
appointment_3 = Appointment.create!(physician: kreiger, patient: ray, kind: 'Follow-up', time: '2021-03-15 09:00:00 PDT')
appointment_4 = Appointment.create!(physician: kreiger, patient: lana, kind: 'New Patient', time: '2021-03-15 09:30:00 PDT')
appointment_5 = Appointment.create!(physician: kreiger, patient: pam, kind: 'New Patient', time: '2021-03-15 10:00:00 PDT')