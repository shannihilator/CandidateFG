require 'rubygems'
require 'httparty'

#implemented httparty to make api call
#added header auth with Bearer token
#get method to access data from the api
 bearer_token = ENV['api_key']
 api_auth_header = {"Authorization" => "Bearer #{bearer_token}"}
 url = "https://api.salesloft.com/v2/people.json"

 puts HTTParty.get(url, headers: api_auth_header).body
 
 

 
