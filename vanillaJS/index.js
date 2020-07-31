// Javascript는 이벤트 핸들링을 위해서 만들어졌다.

const title = document.getElementById("title")

const CLICKED_CLASS = "clicked"

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS)
    if(!hasClass){
        title.classList.add(CLICKED_CLASS); 
    } else {
        title.classList.remove(CLICKED_CLASS)
    }
}

function init(){
    title.addEventListener("click", handleClick)
    //event를 찾아보려면 MDN을 검색해서 찾아보면 된다.
}
init()
