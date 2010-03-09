GEM
sudo gem install webby

RUN
cd stmel.org/stmel-webby/     # cd to your local repo

webby                         # run the app

webby autobuild               # this enables auto build for every change (but you need to refresh twice even if you have browser cache disabled.)

LOCAL
http://localhost:4331/        # 

HELP
http://webby.rubyforge.org/

Directory structure

Sitefile        -dunnow
content/        -contents, real web pages as text files (supports html, haml, textile etc.) see existing files, ex:index.txt
layouts/        -layout file
lib/            -library
output/         -generated html files. +CSS, JS files
tasks/          -
templates/      -


Used Helpers for multi-level links - refer St. Mel

JS Snippet for the same:

var limiter=33; // Array index to cut the URL prefix. ie, count of chars until the dir structure starts.
var page=window.location.href.slice(limiter);
$('ul.nav').find("a[href='"+page+"']").each(function(){
  $(this).parent().addClass("current");
});