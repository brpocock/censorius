all:	bin www doc

bin:	bin/herald.cgi bin/herald.repl bin/herald.fcgi

www:	censorius/www/js/app.js

doc:	doc/censorius.pdf doc/censorius.html doc/censorius.txt doc/censorius.docbook \
	doc/censorius.info

SOURCES=$(shell find . -name \*.lisp -or -name \*.asd) ~/herald-secrets.lisp
WWWSOURCES=$(shell find . -name \*.clj -or -name \*.cljs)

bin/herald.cgi:	${SOURCES}
	cd herald
	buildapp --output herald.cgi \
		--logfile build.herald.cgi.log \
		--load ~/quicklisp/setup.lisp \
		--asdf-path $$(pwd) \
		--asdf-path $$(pwd)/brfputils \
		--load build.lisp \
		--entry herald-fcgi::exec-cgi

bin/herald.fcgi:	${SOURCES}
	cd herald
	buildapp --output herald.cgi \
		--logfile build.herald.cgi.log \
		--load ~/quicklisp/setup.lisp \
		--asdf-path $$(pwd) \
		--asdf-path $$(pwd)/brfputils \
		--load build.lisp \
		--entry herald-fcgi::exec-fcgi

bin/herald.repl:	${SOURCES}
	cd herald
	buildapp --output herald.cgi \
		--logfile build.herald.cgi.log \
		--load ~/quicklisp/setup.lisp \
		--exec '(ql:quickload :prepl)'
		--asdf-path $$(pwd) \
		--asdf-path $$(pwd)/brfputils \
		--load build.lisp \
		--entry herald-fcgi::exec-repl

censorius/www/js/app.js: ${WWWSOURCES}
	cd censorius
	lein cljsbuild once

install:	all
	$$(ls -rt1 ~/herald-build-*.log)
	#ln -f bin/herald.repl ../bin/herald.repl
	#ln -f bin/herald.cgi ../fpgrocks.org/reg/herald.cgi
	#ln -f bin/herald.fastcgi ../fpgrocks.org/reg/herald.fcgi



