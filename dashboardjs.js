let databack=JSON.parse(localStorage.getItem("book_list"));
let buydata=JSON.parse(localStorage.getItem("buylist"))||[];
let markdata=JSON.parse(localStorage.getItem("add_list"))||[];
document.querySelector("#filter").addEventListener("change",mycat);
function mycat(event){
    event.preventDefault();
    let filtercat=databack.filter(function(el){
        return el.entercat==selected;
    })
    alldata(filtercat);
}
function alldata(databack){
    let count=0;
    databack.forEach(function(el,i){
        document.querySelector("tbody").innerHTML="";
        count++;
        document.querySelector("#tb").innerText=count;
        let row=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=el.entername;
        let td2=document.createElement("td");
        td2.innerText=el.enteraname;
        let td3=document.createElement("td");
        td3.innerText=el.enterdes;
        let td4=document.createElement("td");
        td4.innerText=el.enterdate;
        let td5=document.createElement("td");
        td5.innerText=el.entercat;
        let td6=document.createElement("td");
        td6.innerText="Buy";
        td6.style.backgroundColor="green";
        td6.addEventListener("click",function(event){
            event.target.parentNode.remove();
            count--;
            document.querySelector("#tb").innerText=count;
            databack.splice(i,1);
            localStorage.setItem("book_list",JSON.stringify(databack));
            buydata.push(databack);
            localStorage.setItem("buylist",JSON.stringify(buydata));
        })
        let td7=document.createElement("td");
        td7.innerText="Add";
        td7.style.backgroundColor="red";
        td7.addEventListener("click",function(event){
            event.target.parentNode.remove();
            count--;
            document.querySelector("tb").innerText=count;
            databack.splice(i,1);
            localStorage.setItem("book_list",JSON.stringify(databack));
            markdata.push(databack);
            localStorage.setItem("add_list",JSON.stringify(markdata));
        })
        let td8=document.createElement("td");
        td8.innerText=el.enterprice;
        row.append(td1,td2,td3,td4,td5,td6,td7,td8);
        document.querySelector("tbody").append(row);
    })
}
alldata(databack);