let myLibrary = [];
const closeButton = document.querySelector(".cancelButton")
const openButton = document.querySelector(".newBookButton")
const sumbitButton = document.querySelector(".submitButton")
const modal = document.querySelector(".bookModal")
const bookContainer = document.querySelector(".bookStorage")
const bookNumberP = document.querySelector(".bookNumber")

function Book(title,author,pages,isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
  this.index = 0
}

function swapBooks(oldPos, newPos){
  
}

function changeReadStatus(buttonElement){
  if(buttonElement.innerText == "Read"){
    buttonElement.style.backgroundColor = "#af0707"
    buttonElement.innerText = "Not read"
  }

  else{
    buttonElement.style.backgroundColor = "#03691d"
    buttonElement.innerText = "Read"
  }
}

function addBookToLibrary() {
  let title = document.querySelector(".title").value
  let author = document.querySelector(".author").value
  let pages = parseInt(document.querySelector(".pages").value)
  let isRead = document.querySelector(".readStatus").checked
  if(title != '' && author != '' && pages > 0 && typeof pages === 'number'){
    let newBook = new Book(title,author,String(pages),isRead)
    newBook.index = myLibrary.length
    myLibrary.push(newBook)
    showEveryBook()
  }
}

function removeBook(element){
  let endIndex = Number(element.parentElement.getAttribute("data-id"))
  for(let i = endIndex+1;i<myLibrary.length; i++){
    myLibrary[i].index -= 1
    element.parentElement.setAttribute("data-id", String(myLibrary[i].index))
  }
  element.parentElement.remove()
  myLibrary.splice(endIndex, 1)
  bookNumberP.textContent = Number(bookNumberP.textContent)-1
  if(Number(bookNumberP.textContent)==0){
    myLibrary.length = 0
  }
}

// function swapBooks(button){
//   let parent = button.parentNode
//   if(button.id == "upBtn"){
//     if 
//   }
// }

function makeBookSheet(bookIndex){
  let bookCard = document.createElement("div")

  let title = document.createElement("div")
  title.innerText = myLibrary[bookIndex].title

  let author = document.createElement("div")
  author.innerText = myLibrary[bookIndex].author

  let pages = document.createElement("div")
  pages.innerText = myLibrary[bookIndex].pages

  bookCard.setAttribute("class", "bookSheet")
  bookCard.setAttribute("data-id", String(myLibrary[bookIndex].index))

  let removeButton = document.createElement("button")
  let readButton = document.createElement("button")
  // let upButton = document.createElement("button")
  // upButton.id = "upBtn"
  // let downButton = document.createElement("button")
  // downButton.id = "dwnBtn"

  removeButton.textContent = "Delete book"

  if(myLibrary[bookIndex].isRead){
    readButton.style.backgroundColor = "#03691d"
    readButton.innerText = "Read"
  }

  else{
    readButton.style.backgroundColor = "#af0707"
    readButton.innerText = "Not read"
  }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  bookCard.appendChild(removeButton)
  bookCard.appendChild(readButton)
  // bookCard.appendChild(upButton)
  // bookCard.appendChild(downButton)

  readButton.addEventListener("click", ()=>{changeReadStatus(readButton)})
  removeButton.addEventListener("click", ()=>{removeBook(removeButton)})
  // upButton.addEventListener("click", ()=>)

  bookContainer.appendChild(bookCard)
}

const removeChildren = (parent) => {
  while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
  }
};

function showEveryBook(){
  removeChildren(bookContainer)
  for(let i=0; i<myLibrary.length; i++){
    makeBookSheet(i)
  }
  closeForm()
  document.querySelector("form-container")
  bookNumberP.textContent = myLibrary.length
}

function openForm(){
  modal.style.display = "block"
}

function closeForm(){
  modal.style.display = "none"
}

function main(){
  closeButton.addEventListener("click", ()=>{closeForm()})
  openButton.addEventListener("click",()=>{openForm()})
  sumbitButton.addEventListener("click", ()=>{addBookToLibrary()})
  window.addEventListener("click", e =>{
    if(e.target == modal){
      modal.style.display = "none"
    }
  })
}

main()

