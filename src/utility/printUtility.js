export function printContent(divId) {

  var divContents = document.getElementById(divId).innerHTML;
  var a = window.open('notes.html', 'Notemark Print', 'height=500, width=500, titlebar=notemark');


  a.document.write('<html><head><title>Print Notes!</title><style> .icons{display:none} .button{display:none} </style ></head>');
  a.document.write('<body >');
  a.document.write(divContents);
  a.document.write('</body></html>');
  a.document.close();
  a.print();
} 
