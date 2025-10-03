var totalTask = document.getElementById("totalTask");
var completedTask = document.getElementById("completedTask");
var taskMenuParent = document.getElementById("task-bar-menu");
var getCompleteDiv = document.getElementById("Completed-bar-menu");
var getPendingDiv = document.getElementById("Pending-bar-menu")

function addTask(j){
    var todo = document.getElementById("todo");
    var todoText = todo.value.trim()
    var idGenerate = Math.random();

    var date = new Date();
    var getDay = date.getDay();
    var getDate = date.getDate();
    var getMonth = date.getMonth();
    var getYear = date.getFullYear();
    var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var getNameOfMonth = monthName[getMonth];
    var getNameOfDay = dayName[getDay];

    var completeDate = getNameOfDay + ", " + getNameOfMonth + " " + getDate + ", "  + getYear;
    
    // console.log(j)
    if(todoText !== "" && j != undefined){
        document.getElementById(j).firstElementChild.innerText = todoText;
        todo.value = ""
        var getAddTask = document.getElementById("addTask");
        getAddTask.setAttribute("onclick", "addTask()")
    }
    else if(todoText !== ""){

    // create main body

    var mainBodyId = "taskMenu" + idGenerate;
    console.log(mainBodyId)
    var taskMenuBody = document.createElement("div");
    taskMenuBody.className = "row g-0 align-items-center py-2 border-bottom h-auto";
    taskMenuBody.id = mainBodyId;
    taskMenuParent.appendChild(taskMenuBody);
    var getTaskMenu = document.getElementById(mainBodyId);

    // // create body children

    // Check Box

    // Creating checkBox div

    var checkBoxId = "CheckBoxId" + idGenerate;
    var checkBodyDiv = document.createElement("div");
    checkBodyDiv.id = checkBoxId;
    checkBodyDiv.className = "col-1 col-lg-1 ps-2 px-md-3 pe-lg-0 tick-main d-flex"
    getTaskMenu.appendChild(checkBodyDiv);

    var createCheck = document.createElement("div");
    var cbxDivId = "cbxDiv" + idGenerate;
    createCheck.className = "cbx d-flex justify-content-center align-items-center";
    createCheck.id = cbxDivId;
    var getCheckBodyId = document.getElementById(checkBoxId);
    getCheckBodyId.appendChild(createCheck);

    // Creating Input

    // edit delete menu list id
    var listId = "listId" + idGenerate;
    var createInput = document.createElement("input");
    var createInputId = "input" + idGenerate;
    createInput.id = createInputId;

    // Seting Attributes
    createInput.setAttribute("type", "checkbox");
    createInput.setAttribute("value", "Completed");
    createInput.setAttribute("onclick", "getCheck('" + createInputId + "' , '" + mainBodyId + "')");
    
    // createInput.setAttribute("id", "check" + idGenerate);

    ////////////////////

    var checkDiv = document.getElementById(cbxDivId);
    checkDiv.appendChild(createInput);


    var g = document.getElementById(cbxDivId);
    var exit = g.innerHTML;
    g.innerHTML = exit + " <label></label><svg class='tick-svg' viewbox='0 0 15 13' fill='none'><path d='M2 8.36364L6.23077 12L13 2'></path></svg>"
    ////////////////////


    // Serial Number
    
    var serialId = "serial" + idGenerate;
    var createSerial = document.createElement("div");
    createSerial.className = "col-2 col-md-1 col-lg-1";
    createSerial.id = serialId;
    getTaskMenu.appendChild(createSerial);

    // create serial text

    var serialDiv = document.getElementById(serialId);
    var serialPara = document.createElement("p");
    serialPara.className = "px-3 px-md-0 ps-lg-0 task-para-text fw-bolder m-0"
    serialPara.textContent = taskMenuParent.children.length;
    serialDiv.appendChild(serialPara);    

    //////////////////// Serial Ends Here/////////////////////
    
    // Task Name

    var taskId = "task" + idGenerate;
    var createTask = document.createElement("div");
    createTask.className = "col-4 col-lg-5 px-2";
    createTask.id = taskId;
    getTaskMenu.appendChild(createTask);

    // create Task Text

    var taskDiv = document.getElementById(taskId);
    var taskPara = document.createElement("p");
    taskPara.className = "fw-bolder task-para-text m-0 p-0 pe-md-4";
    taskPara.textContent = todoText;
    taskDiv.appendChild(taskPara);

    /////////////////// Task text End Here /////////////////////

    // Date

    var dateId = "date" + idGenerate;
    var createDate = document.createElement("div");
    createDate.className = "col-2 col-lg-2 d-none d-md-block";
    createDate.id = dateId;
    getTaskMenu.appendChild(createDate);

    // create current Date

    var dateDiv = document.getElementById(dateId);
    var datePara = document.createElement("p");
    datePara.className = "fw-bolder task-para-text m-0"
    datePara.textContent = completeDate;
    dateDiv.appendChild(datePara);
    
    ///////////////// Date text Ends Here ///////////////////

    // Status

    var statusId = "status" + idGenerate;
    var createStatus = document.createElement("div");
    createStatus.className = "col-3 col-md-2 col-lg-2 ps-0 ps-md-3 pe-2 pe-lg-3 pe-xl-5";
    createStatus.id = statusId;
    getTaskMenu.appendChild(createStatus);

    // create Status
    var statusChildid = "statusChild" + idGenerate;
    var createStatusChild = document.createElement("div");
    createStatusChild.id = statusChildid;
    createStatusChild.className = "border border-1 rounded-2 pendingBox"
    var statusDiv = document.getElementById(statusId);
    statusDiv.appendChild(createStatusChild);

    var statusChild = document.getElementById(statusChildid);
    var statusPara = document.createElement("p");
    statusPara.className = "fw-bolder task-para-text text-center m-0"
    statusPara.textContent = "PENDING";
    statusChild.appendChild(statusPara);

    // Status Ends Here

    // Options

    var optionDivId = "OptionDivId" + idGenerate;
    var createOptionDiv = document.createElement("div");
    createOptionDiv.className = "col-2 col-lg-1 px-3 px-md-5 px-lg-3 w-auto";
    createOptionDiv.id = optionDivId;
    getTaskMenu.appendChild(createOptionDiv);

    // console.log(createOptionDiv)

    // create Option div Child (div);

    var createOptionDivChildId = "menuBody" + idGenerate;
    var createOptionDivChild = document.createElement("div");
    createOptionDivChild.className = "menu-Body";
    createOptionDivChild.id = createOptionDivChildId;
    var getOptionDiv = document.getElementById(optionDivId)
    getOptionDiv.appendChild(createOptionDivChild);
    
    // create option Btn
    
    var optionBtnId = "optionBtn" + idGenerate;
    var getOptionChild = document.getElementById(createOptionDivChildId);
    getOptionChild.innerHTML = "<i class='menu-btn del-edit-svg' id='"+optionBtnId+"' onclick=\"showEditDelMenu('"+listId+"' , '" + createInputId + "')\" style='cursor: pointer;' data-lucide='ellipsis-vertical'></i>";
    lucide.createIcons();
                                      
    // creating list

    // var listId = "listId" + idGenerate;
    var list = document.createElement("ul");
    list.className = "menu-option fw-bolder";
    list.id = listId;
    getOptionChild.appendChild(list);

    var getList = document.getElementById(listId);
    getList.innerHTML = " <li class='task-para-text' onclick=\"edit('" + taskId + "', '" + listId + "')\">Edit</li><li class='task-para-text' onclick=deleteTask('"+mainBodyId+"')>Delete</li>"
    list.style.display = "none";

    todo.value = "";
    // Add total Task
    
    totalTask.innerText = taskMenuParent.children.length;
    }
}


// sgow delete pop up

function showDelPopUp(){
    var delpopup = document.getElementById("delpopup");
    if(taskMenuParent.children.length > 0){
    delpopup.style.display = "block";
    }
    
}

// hide delete pop up

function hideDelPopUp(){
    var delpopup = document.getElementById("delpopup");
    delpopup.style.display = "none";
}

// delete all task

function delTaskAll(){
    var a = document.getElementById("task-bar-menu");
    a.innerHTML = "";
    totalTask.innerText = 0;
    var delpopup = document.getElementById("delpopup");
    delpopup.style.display = "none";
}

/////// Dark Mode ////////

var insertbg = document.getElementById("insertbg");
var borbgContTop = document.getElementById("borders");
var darkButton = document.getElementById("modes");
var getInput = document.getElementById("todo");
var getAddTask = document.getElementById("addTask");
var getDelAllBtn = document.getElementById("deleteALLBtn");
var getBottomBody = document.getElementById("bottom-Data");
var getTaskBody = document.getElementById("task-bar-menu");

function darkMode(){
    darkButton.innerHTML = "<i data-lucide='sun' id='light-mode' height='22' onclick='lightMode()'></i>";
    lucide.createIcons();
    insertbg.className += " insert-bg";
    darkButton.setAttribute("style", "border-color: #4d4d4d !important");
    getInput.setAttribute("style", "background-color: #111827; border-color: #182a52ff !important; color: rgb(201, 201, 201) ");
    getAddTask.setAttribute("style", "background-color: #111827; border-color: #182a52ff !important");
    getAddTask.firstElementChild.style.color = "#10337fff";
    getDelAllBtn.setAttribute("style", "background-color: #111827; border-color: #182a52ff !important");
    getDelAllBtn.firstElementChild.style.color = "#10337fff";
    getDelAllBtn.lastElementChild.style.color = "#10337fff";
    getBottomBody.lastElementChild.setAttribute("style", "border-color: #4d4d4d !important")
    getBottomBody.lastElementChild.firstElementChild.style.color = "rgb(201, 201, 201)"
    var getTaskHeadingMenu = getBottomBody.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
    getTaskHeadingMenu.setAttribute("style", "border-color: #4d4d4d !important");
    for(var i = 0; i < getTaskHeadingMenu.children.length; i++){
        getTaskHeadingMenu.children[i].firstElementChild.style.color = "rgb(201, 201, 201)"
    }


    console.log(getTaskBody.children);
    for(var i = 0; i < getTaskBody.children.length; i++){
        getTaskBody.children[i].setAttribute("style", "border-color: #4d4d4d !important; color: rgb(201, 201, 201) !important");
        console.log(getTaskBody.children[i]);
    }
    darkButton.firstElementChild.style.color = "white"
    for(var i = 0; i < borbgContTop.children.length; i++){
        borbgContTop.children[i].className += " borderbgConTop";
    }
}


function lightMode(){
    // var darkButton = document.getElementById("modes");
    // var getInput = document.getElementById("todo");
    // var getAddTask = document.getElementById("addTask");
    // var getDelAllBtn = document.getElementById("deleteALLBtn");
    // var getBottomBody = document.getElementById("bottom-Data");
    // var getTaskBody = document.getElementById("task-bar-menu");
    darkButton.innerHTML = " <i data-lucide='moon' id='dark-mode' onclick='darkMode()'></i>";
    lucide.createIcons();
    darkButton.setAttribute("style", "border-color: ");
    getInput.setAttribute("style", "background-color: ; border-color: ; color:");
    getAddTask.setAttribute("style", "background-color: ; border-color:");
    getAddTask.firstElementChild.style.color = "";
    insertbg.className = "main-div d-flex flex-column pt-4 h-100";
    getDelAllBtn.setAttribute("style", "background-color:; border-color:");
    getDelAllBtn.firstElementChild.style.color = "";        
    getDelAllBtn.lastElementChild.style.color = "";
    getBottomBody.lastElementChild.setAttribute("style", "")
    getBottomBody.lastElementChild.firstElementChild.style.color = "";

    var getTaskHeadingMenu = getBottomBody.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
    console.log(getTaskHeadingMenu)
    getTaskHeadingMenu.setAttribute("style", "border-color:");
    for(var i = 0; i < getTaskHeadingMenu.children.length; i++){
        getTaskHeadingMenu.children[i].firstElementChild.style.color = "";
    }

    for(var i = 0; i < getTaskBody.children.length; i++){
        getTaskBody.children[i].setAttribute("style", "border-color: ; color:");
        console.log(getTaskBody.children[i]);
    }

    for(var i = 0; i < borbgContTop.children.length; i++){
    var borderClassChild = borbgContTop.children[i];
    var borclasses = borderClassChild.classList;
    var lastClass = borclasses[borclasses.length - 1];
    borclasses.remove(lastClass);

    // var borderClassChild = borbgContTop.children[i];
    // var borclasses = borderClassChild.className.split(" ");
    // borclasses.splice(-1, 1);
    // borderClassChild.className = borclasses.join(" ")

    }
}

// check if check box is checked or not

function getCheck(a, v){
    var getId = document.getElementById(a);
    if(getId.checked){
        isComplete = getId.getAttribute("value");
        getId.parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.firstElementChild.className = "border border-1 rounded-2 completeBox";
        getId.parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.firstElementChild.firstElementChild.innerText = "COMPLETE";
        getId.dataset.locked = "true";
        ///////////////////////////

        ///////////////////////////

        var getRow = getId.parentElement.parentElement.parentElement.parentElement;

        for(var i = 0; i < getRow.children.length; i++){
        if(getRow.children[i].getAttribute("id") === v){
            var copyRow = getRow.children[i];
            getCompleteDiv.innerHTML += copyRow.outerHTML;
        }
        }

        var date = new Date();
        var getDay = date.getDay();
        var getDate = date.getDate();
        var getMonth = date.getMonth();
        var getYear = date.getFullYear();
        var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var getNameOfMonth = monthName[getMonth];
        var getNameOfDay = dayName[getDay];

        var completeDate = getNameOfDay + ", " + getNameOfMonth + " " + getDate + ", "  + getYear;

        for(var i = 0; i < getCompleteDiv.children.length; i++){
            if(getCompleteDiv.children[i].getAttribute("id") === v){
            getCompleteDiv.children[i].firstElementChild.remove();
            getCompleteDiv.children[i].lastElementChild.remove();
            getCompleteDiv.children[i].firstElementChild.nextElementSibling.nextElementSibling.innerText = completeDate;
            getCompleteDiv.children[i].className = "row g-0 align-items-center py-2 border-bottom h-auto px-0 px-sm-2"
            getCompleteDiv.children[i].firstElementChild.className = "col-1 col-lg-1"
            getCompleteDiv.children[i].firstElementChild.firstElementChild.className = "px-3 px-sm-2 task-para-text fw-bolder m-0"
            getCompleteDiv.children[i].firstElementChild.nextElementSibling.className = "col-6 col-lg-7 px-3"
            getCompleteDiv.children[i].firstElementChild.nextElementSibling.nextElementSibling.className = "col-2 col-lg-2 task-para-text fw-bolder"
            getCompleteDiv.children[i].lastElementChild.className = "col-3 col-lg-2 ps-1 pe-2 px-sm-3 pe-xl-5"
            getCompleteDiv.children[i].firstElementChild.firstElementChild.innerText = getCompleteDiv.children.length;
            }
        }

        completedTask.innerText = getCompleteDiv.children.length;
    
    }else{
        if(getId.dataset.locked === "true"){
        getId.checked = true;
        var popUpBody = document.getElementById("taskpopup");
        popUpBody.style.display = "block"
        popUpBody.lastElementChild.lastElementChild.firstElementChild.setAttribute("onclick" , "popTaskIncomplete('" + a + "' , '" + v + "')")
        }
        
        isComplete = "notComplete";
    }
}

// incomplete meassge show pop up

function popTaskIncomplete(b, o){
    var getCheckBody = document.getElementById(b);
    getCheckBody.checked = false;
    var popUpBody = document.getElementById("taskpopup");
    popUpBody.style.display = "none"
    getCheckBody.parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.firstElementChild.className = "border border-1 rounded-2 pendingBox"
    getCheckBody.parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.firstElementChild.firstElementChild.innerText = "PENDING";

    var getCompleteDiv = document.getElementById("Completed-bar-menu");
    for(var i = 0; i < getCompleteDiv.children.length; i++){
        if(getCompleteDiv.children[i].getAttribute("id") === o){
            getCompleteDiv.children[i].remove();
        }
    }

    var serialNumber = 1;
    for(var i = 0; i < getCompleteDiv.children.length; i++){
        getCompleteDiv.children[i].firstElementChild.firstElementChild.innerText = serialNumber++
    }
    completedTask.innerText--;
}

// hide incomplete message pop up

function hidePopUp(){
    var popUpBody = document.getElementById("taskpopup");
    popUpBody.style.display = "none"
}

// shows edit or delete menu 

function showEditDelMenu(k, h){
    var getlist = document.getElementById(k);
    var getInput = document.getElementById(h);
    if(getInput.checked){
        // hide edit delete menu bar
        getlist.style.display = "none"
    }else{
         getlist.style.display = "block";
    }
}

// edit specific task 

function edit(e, m){
    var getTask = document.getElementById(e)
    var getInput = document.getElementById("todo");
    getInput.focus();
    getInput.value = getTask.innerText;
    var getaddTask = document.getElementById("addTask");
    getaddTask.setAttribute("onclick", "addTask('" + e + "')")
    var getList = document.getElementById(m);
    getList.style.display = "none"
}

// delete specific task

function deleteTask(d){
    var serialNumber = 1;
    var getTaskBody = document.getElementById(d);
    getTaskBody.remove()
    var getTaskBodyParent = document.getElementById("task-bar-menu");
    var gh = getTaskBodyParent.children;

    for(var i = 0; i < gh.length; i++){
        gh[i].firstElementChild.nextElementSibling.firstElementChild.innerText = serialNumber++
    }

    totalTask.innerText--;
}

// shows completed tasks

var getbottomData = document.getElementById("bottom-Data");
var getCompletedData = document.getElementById("completed-Data");
var getPendingData = document.getElementById("pending-Data");

function showCompletedTask(){
    getCompletedData.style.display = "block";
    getbottomData.setAttribute("style", "display: none !important");
    getPendingData.setAttribute("style", "display: none !important")
}

// shows all tasks

function showAllTask(){
    getbottomData.setAttribute("style", "display: block");
    getCompletedData.setAttribute("style", "display: none !important");
    getPendingData.setAttribute("style", "display: none !important")
}

// shows pendings tasks

function showPendingTask(){
    getPendingData.setAttribute("style", "display: block");
    getCompletedData.setAttribute("style", "display: none !important");
    getbottomData.setAttribute("style", "display: none !important");
}