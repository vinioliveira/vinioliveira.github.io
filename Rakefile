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
namespace :blog do
  #
  # Because we are using 3rd party plugins for jekyll to manage the asset pipeline
  # and suchlike we are unable to just branch the code, we have to process the site
  # localy before pushing it to the branch to publish.
  #
  # We built this little rake task to help make that a little bit eaiser.
  #

  # Usaage:
  # bundle exec rake blog:publish
  desc "Publish blog to gh-pages"
  task :publish do
    ENV['JEKYLL_ENV'] = 'production'
    # Compile the Jekyll site using the config.
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site",
      "config" => "_config.yml"
    })).process

    # Get the origin to which we are going to push the site.
    # origin = `git config --get remote.origin.url`

    # Make a temporary directory for the build before production release.
    # This will be torn down once the task is complete.
    Dir.mktmpdir do |tmp|
      # Copy accross our compiled _site directory.
      cp_r "_site/.", tmp

      # Switch in to the tmp dir.
      Dir.chdir tmp

      puts '=> Disallow robots...'.magenta
      File.open('robots.txt', 'w') { |file| file.write "User-agent: *\nDisallow: /" }

      puts '=> Change CNAME...'.magenta
      File.open('CNAME', 'w') { |file| file.write 'staging.helabs.com.br' }

      #Prepare git for CircleCI
      system "git config --global user.name 'CircleCI'"
      system "git config --global user.email 'circle@helabs.com'"

      # Prepare all the content in the repo for deployment.
      system "git init" # Init the repo.
      system "git add . && git commit  --signoff -m 'Site updated at #{Time.now.utc}'" # Add and commit all the files.

      # Add the origin remote for the parent repo to the tmp folder.
      # system "git remote add staging git@github.com:Helabs/staging.helabs.com.br.git"
      system 'git remote add staging git@github.com:vinioliveira/vinioliveira.github.io.git'

      # Push the files to the gh-pages branch, forcing an overwrite.
      system "git push staging master:refs/heads/master --force"
    end
    # Done.
  end
end
