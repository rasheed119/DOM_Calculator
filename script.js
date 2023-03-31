var container = document.createElement("div");
container.setAttribute("id","container");

var header = document.createElement("h1");
header.setAttribute("id","title");
header.innerHTML="DOM CALCULATOR";


var calculator = document.createElement("div");
calculator.classList.add("calculator","col-sm-12","col-lg-12");

var form = document.createElement("form");
form.addEventListener("submit",function submit(e){
  e.preventDefault();
})

var input_div = document.createElement("div");
input_div.setAttribute("class","input");

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("name","display");
input.setAttribute("id","result");
input.classList.add("mb-3","mt-3");

var row1 = document.createElement("div");

var clear = document.createElement("button");
clear.setAttribute("value","C");
clear.setAttribute("id","clear");
clear.innerHTML="C";
clear.addEventListener("click",function clear(){
  document.getElementById("result").value="";
});

var remove = document.createElement("button");
remove.setAttribute("id","remove");
remove.innerHTML="&#8592";
remove.addEventListener("click",function remove(){
  document.getElementById("result").value = document.getElementById("result").value.toString().slice(0,-1);
});

var dot = document.createElement("button");
dot.setAttribute("value",".");
dot.innerHTML=".";
dot.addEventListener("click",function dot(){
  document.getElementById("result").value += ".";
});

var multiply = document.createElement("button");
multiply.setAttribute("value","*");
multiply.innerHTML="*";
multiply.addEventListener("click",function multiply(){
  document.getElementById("result").value += "*";
})

var row2 = document.createElement("div");


function createElement(value){
  var tag = document.createElement("button");
  tag.setAttribute("value",value);
  tag.innerHTML=value;
  tag.addEventListener("click",function fun(){
    document.getElementById("result").value += value;
  })
  return tag;
}

var seven = createElement("7");
var eight = createElement("8");
var nine = createElement("9");
var divide = createElement("/");

var row3 = document.createElement("div");

var four = createElement("4");
var five = createElement("5");
var six = createElement("6");
var subraction = createElement("-");
subraction.setAttribute("id","subtract");


var row4 = document.createElement("div");

var one = createElement("1");
var two = createElement("2");
var three = createElement("3");
var addition = createElement("+");
addition.setAttribute("id","add");

var row5 = document.createElement("div");

var zero = createElement("0");
var double_zero = createElement("00");

var equal = document.createElement("button");
equal.setAttribute("class","equal");
equal.setAttribute("id","equal");
equal.innerHTML="="
equal.addEventListener("click",function eva(){
  try {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = eval(value);
  } catch (error) {
    alert("PLEASE ENTER THE VALID INPUT");
  }
})


row1.append(clear,remove,dot,multiply);
row2.append(seven,eight,nine,divide);
row3.append(four,five,six,subraction);
row4.append(one,two,three,addition);
row5.append(zero,double_zero,equal);


input_div.append(input);

form.append(input_div,row1,row2,row3,row4,row5);

calculator.append(form)

container.append(header,calculator);

document.body.append(container);