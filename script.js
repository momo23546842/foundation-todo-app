const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function(){
    const taskText = taskInput.value;
    if (taskText === ""){
        return; // 
    }


    // 新しい <li> 要素（タスク1件分）を作成する
const li = document.createElement("li");
const span = document.createElement("span");
span.textContent = taskText;
const deleteButton = document.createElement("button");
deleteButton.classList.add("delete-btn");
deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function(){
        li.remove();
    });

    // liの中にタスクと削除のボタンを追加する
    li.appendChild(span);
    li.appendChild(deleteButton);
　　
   
    // 作成した <li> をタスクリスト（ul）の中に追加する
    taskList.appendChild(li);
     // タスクを追加した後、入力欄を空にする
    taskInput.value ="";
});

// エンターキーで追加できるようにする
taskInput.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        addButton.click();
    }
});

