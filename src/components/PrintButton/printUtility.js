export function printContent(divId) {

  var divContents = document.getElementById(divId).innerHTML;
  var a = window.open('notes.html', 'Notemark Print', 'height=600, width=600, titlebar=notemark');


  a.document.write('<html><head><title>Print Notes!</title><style>.note-side-menu-title{text-transform: uppercase; padding: 0.3rem;color: #616161; font-size: large; font-weight: bolder;} .child-container{padding: 1rem 2rem} .child-container-text{text-align: justify; margin-top: 0.3rem; padding: 0.3rem 0; font-size: 0.8rem;} .child-container-ref{text-align: right; margin-top: 0.3rem; padding: 0.3rem 0; font-size: 0.8rem; color:blue}  .icons{display:none} .btn{display:none} </style ></head>');
  a.document.write('<body >');
  a.document.write(divContents);
  a.document.write('</body></html>');
  a.document.close();
  a.print();
}


