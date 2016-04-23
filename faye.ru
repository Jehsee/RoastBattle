require 'faye'
Faye::WebSocket.load_adapter('thin')
faye_app = Faye::RackAdapter.new(:mount => '/faye', :timeout => 45)
run faye_app