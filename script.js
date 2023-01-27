function addTask()
{
    // get the tag with the 'input' id
    let input = document.getElementById("input");
    // get current text from input field
    let newTask = input.value;

    // only add new item to list if some text is entered
    if (newTask != "")
    {
        // create new HTML for buttons and new task text
        var item = document.createElement("li");
        
        // add HTML for buttons and new task text
        // Note, need to use '' because of "" in HTML
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;"> ' + 
        '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;"> ' + newTask;

        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item);

        /** 
         * To make the todo item typed in the input box disappear, set input.value to an empty string 
         * */
        input.value = "";
        /** 
         * Change input.placeholder to set it to a new string 
         */
        input.placeholder = "Enter next task...";
    }
}

// change styling used for given item
function markDone(item)
{
    item.className = 'finished';
}

function remove(item)
{
    // remove item completely from document
    if (item.className === 'finished')
    {
        item.remove();
    }
}