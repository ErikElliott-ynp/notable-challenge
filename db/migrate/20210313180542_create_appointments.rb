class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.integer :physician_id, null: false
      t.integer :patient_id, null: false
      t.string :kind, null: false
      t.datetime :time, null: false
      
      t.timestamps
    end
    add_index :appointments, :physician_id
    add_index :appointments, :patient_id
  end
end
