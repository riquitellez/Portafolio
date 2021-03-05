const exercise = [
  {
    label: "Week 2 Team Activity",
    url: "week2/index.html"
  },
  {
  label: "Week 3 Team Activity",
  url: "Week3/index.html"
},
{
  label: "Week 4 Team Actvity",
  url: "Week4/index.html"
},
{
  label: "Week 5 Team Activity",
  url: "week5/hikes5/hiking-complete.html"
},

{
  label: "ToDo List Application",
  url: "midterm/index.html"
},

{
  label: "Week 7 Team Activity",
  url: "week5/hikes5/hiking-complete.html"
},

{
  label: "Week 8 Team Activity",
  url: "week8/index.html"
},

{
  label: "Week 9 Team Activity",
  url: "week9/index.html"
}
];

const code = document.getElementById("code");

for (const item of exercise) {
    // Create list element
    const li = document.createElement('li');
    // Create list item
    const a = document.createElement('a');
    // Set the Contents
    a.setAttribute('href', item.url);
    a.textContent = item.label;
    // Add to the list
    li.appendChild(a);

    // Add item to the ol list
    code.appendChild(li);
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

