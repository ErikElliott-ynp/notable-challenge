# == Schema Information
#
# Table name: physicians
#
#  id         :bigint           not null, primary key
#  fname      :string           not null
#  lname      :string           not null
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Physician < User
    self.table_name = 'physicians'

    validates :fname, :lname, :email, presence: true

    has_many :appointments

end
