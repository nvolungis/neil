class FilesController < ApplicationController
  def resume
    redirect_to 'http://neilvolungis.s3.amazonaws.com/neil-volungis-res.pdf'
  end
end
