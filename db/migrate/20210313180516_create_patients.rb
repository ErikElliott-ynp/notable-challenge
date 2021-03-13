class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :fname
      t.string :lname

      t.timestamps
    end
  end
end
