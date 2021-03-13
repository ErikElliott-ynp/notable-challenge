# == Schema Information
#
# Table name: patients
#
#  id         :bigint           not null, primary key
#  fname      :string           not null
#  lname      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Patient < User
    self.table_name = 'patients'

    validates :fname, :lname, presence: true

    has_many :appointments
end
