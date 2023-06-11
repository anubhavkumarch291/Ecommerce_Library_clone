document.querySelector("form").addEventListener("submit",myfun);
let storedata=JSON.parse(localStorage.getItem("book_list"))||[];
function myfun(event){
    event.preventDefault();
    let entername=document.querySelector("#name").value;
    let enteraname=document.querySelector("#aname").value;
    let enterdes=document.querySelector("#des").value;
    let enterdate=document.querySelector("#date").value;
    let entercat=document.querySelector("#category").value;
    let enterprice=document.querySelector("#price").value;
    let objdata={entername,enteraname,enterdes,enterdate,entercat,enterprice};
    storedata.push(objdata);
    if(entername==""||enteraname==""||enterdes==""||enterdate==""||entercat==""||enterprice==""){
        document.querySelector("h2").innerText="**** Please Enter All the Values ! ****";
    }else{
    localStorage.setItem("book_list",JSON.stringify(storedata));
    document.querySelector("h2").innerText="It's Done Book is added to the dashboard";
    }
    document.querySelector("#name").value="";
    document.querySelector("#aname").value="";
    document.querySelector("#des").value="";
    document.querySelector("#date").value="";
    document.querySelector("#category").value="";
    document.querySelector("#price").value="";
}