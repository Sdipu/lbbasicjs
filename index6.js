console.log("hello");


// using ES5 70 percent........ ES6 puri nhi huiiiii bhai ds b krni h....
function Book(name,author,type){
    this.name = name;
    this.author = author ;
    this.type = type;

}
//////////////////////////////////////////////////////////////////////////////////////////////
//display krega yeah.....
function Display(){

}
////////////////////////////////////////////////////////////////////////////////////////////////
//add krega yeah


Display.prototype.add = function (book) {
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}




///////////////////////////////////////////////////////////////////////////////////////////
//clear krega yeah..........

Display.prototype.clear =function(){   //clear fields and unchecked boxes
   let libraryform =document.getElementById("libraryForm");//grab using id
libraryform.reset();  //reset is function to  reset form 


}


/////////////////////////////////////////////////////////////////////////////////////////////////


///check no-one leave blank 

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}




////////////////////////////////////////////////////////////////////////////////////////////////////



//add submit event listner 
let libraryform =document.getElementById("libraryForm");//grab using id
libraryform.addEventListener('submit',onsubmitfun);

function onsubmitfun(e)
{
    let name =  document.getElementById("bookName").value;// used to grab value
     let author =document.getElementById("author").value;
     let type ;
     //for check box 
     let fiction=  document.getElementById("fiction"); // grab element
     let programming=document.getElementById("programming");
     let cooking  = document.getElementById("cooking");
// if else statement which is checked

if(fiction.checked){ //return true or false
    type = fiction.value; // set value fiction html tag  (or here you can writetype = fiction)
}
else if(programming.checked){
    type = programming.value;
}
else if(cookin.checked){
    type = cooking.value;
}

let book = new Book(name,author,type);
console.log(book);
let display = new Display();

if (display.validate(book)) {

    display.add(book);
    display.clear();
    display.show('success', 'Your book has been successfully added')
}
else {
    // Show error to the user
    display.show('danger', 'Sorry you cannot add this book');
}





e.preventDefault(); // not loading while submit 
    //console.log("hello");
}