/*=====VARIABLES=====*/
const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");


/*=====EVENTS=====*/
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);


/*=====FUNCTIONS=====*/
//  Add Item
function addItem(e) {
    e.preventDefault();

    // Get input value
    const newItem = document.getElementById("item");

    // Create new li Item
    const li = document.createElement("li");
    li.className = "list-group-item"

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem.value));

    // Create delete button element
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    deleteBtn.appendChild(document.createTextNode("X"));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);

    // Clears the content of the input form
    newItem.value = "";
}

function removeItem(e) {
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    const text = e.target.value.toLowerCase();
    const items = document.getElementsByTagName("li");

    // Convert HTML Elements into an Array
    Array.from(items).forEach((item)=> {
        const itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}