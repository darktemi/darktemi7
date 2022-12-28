with(window.document) {
  writeln('<div id="accordion">');
  for(var i = 0; i < 7; i++){
    writeln('<h3 id="title',i,'" class="title"></h3>');
    writeln('<div id="text',i,'"></div>');
  }
  writeln('</div>');
}
