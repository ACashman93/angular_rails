10.times do |proposal|
  Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url:'http://google.com',
    tools: "Ruby on Rails, Angular 2, and PostgresQL",
    estimated_hours: (80 + proposal),
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: 'test@test.com'
  )
end

puts "10 proposals created"