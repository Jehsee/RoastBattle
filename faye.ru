require 'faye'
Faye::WebSocket.load_adapter('thin')
faye_app = Faye::RackAdapter.new(:mount => '/faye', :timeout => 45)
run faye_app






*****config.ru****
# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment', __FILE__)
run Rails.application




****8faye.ru*****
require 'faye'
Faye::WebSocket.load_adapter('thin')
faye_app = Faye::RackAdapter.new(:mount => '/faye', :timeout => 45)
run faye_app