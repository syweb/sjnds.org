GEM
sudo gem install webby

RUN
cd stmel.org/stmel-webby/     #cd to your local repo

webby                         #run the app

webby autobuild               #this enables auto build for every change

LOCAL
http://localhost:4331/

HELP
http://webby.rubyforge.org/

Directory structure

Sitefile        -
content/        -contents, real web pages as text files (supports html, haml, textile etc.) see existing files, ex:index.txt
layouts/        -layout file
lib/            -
output/         -generated html files. +CSS, JS files
tasks/          -
templates/      -
