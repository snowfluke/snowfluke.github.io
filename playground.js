var $ = el => document.querySelector(el)
var editor = $('#editor')
var result = $('#result')

function tab(event){
    if(event.keyCode !== 9) return
    event.preventDefault()

    let start = editor.selectionStart;
    let end = editor.selectionEnd;

    if(start == end){
        editor.value = editor.value.substring(0, start) + "\t" + editor.value.substring(end);

        editor.selectionStart =
        editor.selectionEnd = start + 1;
        return
    }

    indentSelected()
}

function bershikan(){
    editor.value = ""
    bersihkanKonsol()
}

function bersihkanKonsol(){
    result.value = ""
}

function jalankan(){
    bersihkanKonsol()
    window.scrollBy(0, 456)
    let dummyCommand = editor.value.replaceAll("console.log","dummyLog")

    try {
        (new Function(dummyCommand))();
    } catch (error) {
        result.value = error;
    }
}

function dummyLog(...cmd){
    setTimeout(() => {
        result.value += `${cmd.join(" ")}
`}, 1000)
}

function insertFor(){
    let cmd = 
`for(let i = 0; i <= 10; i++ ){

}`
    insert(cmd)

}

function insertFn(){
    let cmd = 
`function namaFungsi(){

}`
    insert(cmd)
}

function insertIf(){
    let cmd = 
`if( ){

}else{

}`

    insert(cmd)
}

function insertClass(){
    let cmd = 
`class NamaKelas{
    
    constructor( ){

    }

    method(){

    }

}`
    insert(cmd)
}

function insertLog(){
    let cmd = 
`console.log(i)`
    insert(cmd)
}

function handleShortcut(){
    
}

function insert(el){
    let start = editor.selectionStart;
    let end = editor.selectionEnd;

    editor.value = editor.value.substring(0, start) +
el + editor.value.substring(end);

  editor.selectionStart =
    editor.selectionEnd = start + 1;
}

function indentSelected(){
    let start = editor.selectionStart
    let end = editor.selectionEnd
    let lineCount = editor.value.substring(start, end).split('\n').length
    let newIndent = editor.value.substring(start, end).split('\n').map(el => '\t'+el).join('\n')
    
    editor.value = editor.value.substring(0, start) + newIndent + editor.value.substring(end)

    editor.selectionStart = start
    editor.selectionEnd = end+lineCount

}

function undoIndent(){
    let start = editor.selectionStart
    let end = editor.selectionEnd
    let lineCount = editor.value.substring(start, end).split('\n').length
    let newIndent = editor.value.substring(start, end).split('\n').map(el => (el.substring(0,1) == '\t') ? el.substring(1,el.length) : el).join('\n')

        
    editor.value = editor.value.substring(0, start) + newIndent + editor.value.substring(end)

    editor.selectionStart = start
    editor.selectionEnd = end+lineCount
}