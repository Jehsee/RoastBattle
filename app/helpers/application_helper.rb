module ApplicationHelper
  def notify(channel, &block)
    message = {:channel => channel, :data => capture(&block)}
    uri = URI.parse("http://roastpubserver/herokuapp.com/faye")
    Net::HTTP.post_form(uri, :message => message.to_json)
  end

end
