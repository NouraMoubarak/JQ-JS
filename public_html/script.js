var coloring;
function changeColor(){
                 coloring = window.setInterval(getColor, 1000);
            }
function getColor(){
    var color;
    var rnd = Math.random();
    if(rnd<0.34){
        color = "blue";
        }else if(rnd<0.67){
            color="red";
            }else {
            color = "green";
            window.clearInterval(coloring);
            }
    document.getElementById("p1").style.color = color;
}

 function changeFontSize(){
                document.getElementById("p1").style.fontSize="50px";
            }
 function changeBGcolor(me){
                if (me.value===""){
                    me.style.backgroundColor="";
                }
                else{
                    me.style.backgroundColor="yellow";
                }
            }           
function getAbbreviation (){
    document.getElementById("p3").innerHTML = "DVM: Department of Motor Vehicles";
    document.getElementById("p4").innerHTML = "FH: Fiscal hoursepower";
    document.getElementById("p5").innerHTML = "MVAT: Motor Vehicle Annual Tax";
}

 
            function addRow(){
                var newRow = document.createElement("tr");
                var cell36 = document.createElement("td");
                var cell37 = document.createElement("td");
                var cell38 = document.createElement("td");
                var cell39 = document.createElement("td");
                var cell40 = document.createElement("td");
                cell37.innerHTML = "288,000";
                cell38.innerHTML = "715,000";
                cell39.innerHTML = "1,500,000";
                cell40.innerHTML = "3,100,000";
                newRow.appendChild(cell36);
                newRow.appendChild(cell37);
                newRow.appendChild(cell38);
                newRow.appendChild(cell39);
                newRow.appendChild(cell40);
                var myTable = document.getElementById("myTable");
                myTable.appendChild(newRow);
            }
            
function getSize(){
                var height = document.documentElement.clientHeight;
                var width = document.documentElement.clientWidth;
                var spans = document.getElementsByTagName("span");
                spans[0].innerHTML = height;
                spans[1].innerHTML = width;
            }
            
function getContent(){
                //. value li2anno badde 3abbe bi text field
                document.getElementById("url").value = document.URL;
            }        
            
            function mainPoints(){
                $("li:lt(3)").css("list-style-type","decimal");
            }