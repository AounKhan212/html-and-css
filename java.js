//-----------------digital clock----------------


//    function todayDate() {
//             var d = new Date();
//             var h = d.getHours();
//             var m = d.getMinutes();
//             var s = d.getSeconds();

//             h = check(h);
//             m = check(m);
//             s = check(s);

//             var time = h + ":" + m + ":" + s;
//             document.getElementById("id").innerHTML = time;

//             // Update every second
//             setTimeout(todayDate, 1000);
//         }

//         function check(v) {
//             if (v < 10) {
//                 v = "0" + v;
//             }
//             return v;
//         }

//----------------------Image swapping------------------------//

// function swap(){
// var swap=document.images[0].src;

// document.images[0].src=document.images[1].src;
// document.images[1].src=swap;
// }

// function autoswap(){
//   setInterval(swap,1000);
// }

//--------------------chnageprogram----------------

function changeProgram(){

    var old=document.getElementsByTagName("ol")[0];
    var ele=old.getElementsByTagName("ul")[0];
    var secEle=old.getElementsByTagName("ul")[1];
    var secList=secEle.getElementsByTagName("li");
    var list=ele.getElementsByTagName("li");
    for(var i=0; i< list.length;i++){
        var change=list[i];
        if(change.innerHTML=="Ap"){
            change.innerHTML="WEb";
        }
    }

    for(var i=0; i<secList.length;i++){
        var change=secList[i];
        if(change.innerHTML.trim().toLowerCase()==="hclcg"){
            change.innerHTML="Web";
        }
    }
}





//----------------jason array-----------

// document.getElementById("Student").innerText = "JSON Array Object Example";

// var student = {
//   stu: [
//     {"reg": 1, "Name": "Aoun", "Section": "BSCS"},
//     {"reg": 2, "Name": "Ali", "Section": "BSCS"},
//     {"reg": 3, "Name": "Zia", "Section": "BSCS"},
//     {"reg": 4, "Name": "Umar", "Section": "BSCS"},
//     {"reg": 5, "Name": "Bilal", "Section": "BSCS"}
//   ]
// };

// document.write("<table border='2' cellspacing='2' cellpadding='6'>");
// document.write("<tr><th>Reg</th><th>Name</th><th>Section</th></tr>");

// for (var i = 0; i < student.stu.length; i++) {
//   document.write("<tr>");
//   document.write("<td>" + student.stu[i].reg + "</td>");
//   document.write("<td>" + student.stu[i].Name + "</td>");
//   document.write("<td>" + student.stu[i].Section + "</td>");
//   document.write("</tr>");
// }

// document.write("</table>");



//-----task no1 of jason----------------



// var data={stu:[
//      {"reg": 1, "Name": "Aoun", "Section": "BSCS"},
//      {"reg": 2, "Name": "Ali", "Section": "BSCS"},
//      {"reg": 3, "Name": "Zia", "Section": "BSCS"},
//      {"reg": 4, "Name": "Umar", "Section": "BSCS"},
//      {"reg": 5, "Name": "Bilal", "Section": "BSCS"}

// ]};

// document.getElementById("Student").innerHTML="List Example";

//   document.write("<ol type='1'>");
// for(var i=0; i <data.stu.length; i++){

//  document.write((i+1));
//    document.write("<ul> <li>"+ data.stu[i].reg+"</li>" );
//    document.write("<li>"+data.stu[i].Name+"</li>");
//    document.write("<li>"+data.stu[i].Section+"</li>");
//    document.write("</ul>");
  
// }
//  document.write("</ol>");



//-----dom color change-----------------------------

// function changeColor(color){
//     var ele=document.getElementById("p2");
//     var oldColor=ele.style.color;
//       if(oldColor==color){
//         ele.style.color="";

//       }else{
//         ele.style.color=color;

//       }
// }



// --- chnage text--------------------///\


//  function changetext(newText) {
//     var ele = document.getElementById("p3");

//     if (!ele.dataset.originalText) {
//         ele.dataset.originalText = ele.innerHTML;
//     }

//     if (ele.innerHTML === newText) {
//         ele.innerHTML = ele.dataset.originalText; 
//     } else {
//         ele.innerHTML = newText;     }
// }



