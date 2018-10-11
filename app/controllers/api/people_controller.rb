require 'rubygems'
require 'httparty'


 bearer_token = ENV['SALESLOFT_APPLICATION_SECRET']
 api_auth_header = {"Authorization" => "Bearer #{bearer_token}"}
 url = "https://api.salesloft.com/v2/people.json"

 puts HTTParty.get(url, headers: api_auth_header).body
 
 

 
