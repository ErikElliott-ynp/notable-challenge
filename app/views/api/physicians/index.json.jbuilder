json.array! @physicians do |physician|
    json.extract! physician, :id, :fname, :lname
end