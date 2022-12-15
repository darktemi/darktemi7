with(window.document) {
    writeln('<table cellpadding=2 cellspacing=0>');
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++) {
            if(j===0) {
            writeln('<tr>');
            }
            writeln('<td width=70px height=70px id="td" onclick="puzzle(',i,', ',j,')">');
            writeln('<img src=',i,'',j,'.jpg border=0 width=70px height=70px id=p',i,'',j,'></a>');
            writeln('</td>');
        }
    }
writeln('</table>');
}

solve();


