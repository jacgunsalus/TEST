document.getElementById("demo").innerHTML = "My First JavaScript";


document.getElementById("div1").innerHTML = "This was put in Div1";

var age
var weight
var health
$('button').click(function() {
  age=$('#age').val();
weight=$('#weight').val();
  alert('weight is ' + weight + ' pounds, ' + 'age is ' + age);

//calculate
parseInt(weight);
parseInt(age);
  
if(weight < 6) {
  alert("Not safe for infants under six months");
  
} else if(6<=weight && weight<=11) {
  alert("One dose is equivalent to 1.25 mL Infant's UNCONCENTRATED drops.");
  
} else if(12<=weight && weight<=17) {
  alert("One dose is equivalent to 2.5 mL Infant's UNCONCENTRATED drops OR 0.5 teaspoon Children's Suspension Liquid.");
  
} else if(18<=weight && weight<=23) {
  alert("One dose is equivalent to 3.75 mL Infant's UNCONCENTRATED drops OR 0.75 teaspoon Children's Suspension Liquid OR 1.5 Children's Soft Chewable Tablets.")
  
} else if(24<=weight && weight<=29) {
  alert("One dose is equivalent to 5 mL Infant's UNCONCENTRATED drops OR 1 teaspoon Children's Suspension Liquid OR 2 Children's Soft Chewable Tablets OR 1 Junior Strength Chewable Tablet.")
  

  
}
})


            