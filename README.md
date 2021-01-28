# Vue-notemark
This Chrome web-extension allows you to copy text from webpages and save them in useful notes. Once you finish your research you can print all the notes in a pdf file or save as html.   

### How it works
This extension allows you to copy text from different webpages and gather them up in useful notes. Notemark is a tool designed for people that need to research or gather information from different sources. 

The extension once enabled emits an event when a text is selected and creates a popup menu that allows you copy(to the clipboard) or store in your browser the selected text. The text will be saved under a tree like structure. You can give a title and gather similar content under the same leaf/note or create a new note/leaf with a different name.

The saved notes can be viewed once the notemark icon is clicked. From this menu you can delete one or all the notes and print them using the print button.

### Test
to test the extension, 
```
yarn install
```

Once all the package have been installed run 

```
yarn run serve
```

in the main folder and go in a chrome browser-> settings -> extensions select "developer mode" and and click on "Load Unpacked" button. 
Upload the folder "dist" created from yarn run serve. 



### video that shows how the web-extension works

<a href="https://m.youtube.com/watch?v=HvEPM_lGWRs"> notemark youtube video </a>



### Compiles and minifies for production
```
yarn build
```

### Licence: Attribution-NonCommercial-ShareAlike 4.0 International

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
