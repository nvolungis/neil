module ApplicationHelper
  def inline_image src
    markup = "style='background-image:url(#{src})'"
    raw markup
  end

  def open_table_wrapper
    raw "<div class='table-wrapper'><div class='table-cell'>"
  end

  def close_table_wrapper
    raw "</div></div>"
  end

  def render_markdown(text)
     markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML.new(hard_wrap: true))
     markdown.render(text).html_safe
  end
end


