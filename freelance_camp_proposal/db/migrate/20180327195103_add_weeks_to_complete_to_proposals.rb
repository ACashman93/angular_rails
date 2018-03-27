class AddWeeksToCompleteToProposals < ActiveRecord::Migration[5.1]
  def change
    add_column :proposals, :weeks_to_complete, :decimal
  end
end
