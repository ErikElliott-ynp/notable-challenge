class Api::PhysiciansController < ApplicationController
    def index
        @physicians = Physician.all
        render :index
    end

    def show
        @physician = Physician.includes(appointments: :patient).find_by(id: params[:id])
        render :show
    end
end
