# == Schema Information
#
# Table name: appointments
#
#  id         :bigint           not null, primary key
#  time       :datetime         not null
#  doctor_id  :integer          not null
#  patient_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Appointment < ApplicationRecord
    
    belongs_to :patient

    belongs_to :physician
end
