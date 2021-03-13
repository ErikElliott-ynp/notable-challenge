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
require 'test_helper'

class PhysicianTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
