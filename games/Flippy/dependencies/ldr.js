t=document.title;document.title="Loading...";r = new XMLHttpRequest();r.onload=function(e){console.log(e)};r.open("GET","http://172.17.0.12:8000/Export/html5/bin/lib/flippy.js",true);r.send;undefined;