build:
	cd build && latex main.tex

build-pdf:
	cd build && pdflatex main.tex

build-SLO: build-pdf
	cp latex build -r
	sed -i -- 's/LANG/slovenian/g' ./build/main.tex

build-ENG: build-pdf
	cp latex build -r
	sed -i -- 's/LANG/english/g' ./build/main.tex
