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
  system 'git remote add staging git@github.com:Helabs/staging.helabs.com.br.git'

  puts '=> Force push to staging. Get some coffee, it may take some time...'.magenta
  system 'git push -f staging staging:gh-pages'

  puts "=> Checkout #{current_branch} branch...".magenta
  system "git checkout #{current_branch}"

  puts '=> Done. It can take up to 10 minutes for your changes to appear staging.helabs.com.br'.yellow
end