ipython_notebook_goodies
========================

Random goodies for use in iPython Notebooks

1. Table of Contents
--------------------

Make a table of contents for your notebook. Uses headings (e.g. H1, H2, etc.) to build TOC, 
and provides anchors (added where needed).

Updated to make an always on top, resizeable TOC.

**Usage:** Include the following at the top of your notebook:

- Add a cell with the following:
```
<h1 id="tocheading">Table of Contents</h1>
<div id="toc"></div>
```

- Add a cell that includes
```
%%javascript
$.getScript('https://gparuthi.github.io/ipython_notebook_goodies/ipython_notebook_toc.js')
```

## Preview
![preview]

[preview]: https://gparuthi.github.io/ipython_notebook_goodies/preview.png "Preview"

