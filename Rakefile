def ask(question)
  begin
    STDOUT.puts "#{question} (y/n)"
    input = STDIN.gets.strip.downcase
  end until %w(y n).include?(input)
  input
end

desc 'Push to staging.helabs.com.br'
task :staging do
  require 'colored'

  answer = ask "Are your sure?"
  exit if answer == 'n'

  puts '=> Memorizing current branch name...'.magenta
  current_branch = `git branch | grep "*"`.gsub('*', '').strip

  puts '=> Remove staging branch...'.magenta
  system 'git branch -D staging'

  puts '=> Create orphan staging branch...'.magenta
  system 'git checkout --orphan staging'

  puts '=> Building javascript files...'.magenta
  system 'npm run build'

  puts '=> Disallow robots...'.magenta
  File.open('robots.txt', 'w') { |file| file.write "User-agent: *\nDisallow: /" }

  puts '=> Change CNAME...'.magenta
  File.open('CNAME', 'w') { |file| file.write 'staging.helabs.com.br' }

  puts '=> Add everything...'.magenta
  system 'git add --all'

  puts '=> Commit everything...'.magenta
  system 'git commit -m "Staging commit"'

  puts '=> Add staging remote...'.magenta
  system 'git remote add staging git@github.com:vinioliveira/vinioliveira.github.io.git'

  puts '=> Force push to staging. Get some coffee, it may take some time...'.magenta
  system 'git push -f staging staging:gh-pages'

  puts "=> Checkout #{current_branch} branch...".magenta
  system "git checkout #{current_branch}"

  puts '=> Done. It can take up to 10 minutes for your changes to appear staging.helabs.com.br'.yellow
end


# Rquire jekyll to compile the site.
require "jekyll"

# Github pages publishing.
namespace :deploy do

  desc "Publish site to staging"
  task :staging do

    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site",
      "config" => "_config.yml"
    })).process


    Dir.mktmpdir do |tmp|
      puts '=> Copy accross our compiled _site directory...'.magenta
      cp_r "_site/.", tmp

      puts '=> Switch in to the tmp dir...'.magenta
      Dir.chdir tmp

      puts '=> Disallow robots...'.magenta
      File.open('robots.txt', 'w') { |file| file.write "User-agent: *\nDisallow: /" }

      puts '=> Change CNAME...'.magenta
      # File.open('CNAME', 'w') { |file| file.write 'staging.helabs.com.br' }

      puts '=> Moving staging files over production one...'.magenta
      # cp('_includes/schedule-meeting-modal-staging-pt.html', '_includes/schedule-meeting-modal-pt.html')
      # cp('_includes/schedule-meeting-modal-staging-en.html', '_includes/schedule-meeting-modal.html')
      # cp('_includes/tag-manager-staging.html', '_includes/tag-manager.html')

      puts '=> Prepare git for CircleCI...'.magenta
      system "git config --global user.name 'CircleCI'"
      system "git config --global user.email 'circle@helabs.com'"

      puts '=> Prepare all the content in the repo for deployment....'.magenta
      system "git init" # Init the repo.
      system "git add . && git commit -m 'Site updated at #{Time.now.utc} [skip ci]'" # Add and commit all the files.

      puts '=> Add the origin remote for the parent repo to the tmp folder...'.magenta
      # system "git remote add staging git@github.com:Helabs/staging.helabs.com.br.git"
      system 'git remote add staging git@github.com:vinioliveira/vinioliveira.github.io.git'

      puts '=> Push the files to the gh-pages branch, forcing an overwrite...'
      system "git push staging master:refs/heads/master --force"

      puts '=> Done. It can take up to 10 minutes for your changes to appear staging.helabs.com.br'.green
    end
  end
end
