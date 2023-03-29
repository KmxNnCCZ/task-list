'use strict'

// タスクを管理する配列を準備する
// {month: 実施月, status: 進捗, title: タイトル, detail: 概要}
const tasks = [];

const taskMonth = document.getElementById('task-month');
const taskStatus = document.getElementById('task-status');
const taskTitle = document.getElementById('task-title');
const taskDetail = document.getElementById('task-detail');
const submitButton = document.getElementById('submit');

const table = document.getElementById('mytable')

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
let day = ("0" + currentDate.getDate()).slice(-2);
let formattedDate = year + "-" + month + "-" + day;
taskMonth.value = formattedDate;

function post () {  
  const task = {
    month: taskMonth.value,
    status: taskStatus.value,
    title: taskTitle.value,
    detail: taskDetail.value
  };
  addTask(task);
}

function addTask(task) {
  tasks.push(task);

  taskMonth.value = formattedDate;
  taskStatus.value = "済";
  taskTitle.value = "";
  taskDetail.value = "";

  console.log(task);
  displayTaskList();
}

function displayTaskList() {
    table.innerHTML = '<tr><th class="item">実施月</th><th class="item">進捗</th><th class="item">タイトル</th><th class="item">タスク概要</th><th class="item">削除</th></tr>';

  for(let i = 0; i< tasks.length; i++) {
    const taskTr = document.createElement('tr');
    
    const monthTd = document.createElement('td');
    monthTd.innerHTML = tasks[i].month;
    monthTd.style = "text-align: center;"
    monthTd.classList.add('month');
    taskTr.appendChild(monthTd);

    const statusTd = document.createElement('td');
    statusTd.innerHTML = tasks[i].status;
    statusTd.style = "text-align: center;"
    statusTd.classList.add('status');
    taskTr.appendChild(statusTd);

    const titleTd = document.createElement('td');
    titleTd.innerHTML = tasks[i].title;
    titleTd.classList.add('title');
    taskTr.appendChild(titleTd);

    const detailTd = document.createElement('td');
    detailTd.innerHTML = tasks[i].detail;
    detailTd.classList.add('detail');
    taskTr.appendChild(detailTd);

    const deleteTd = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteTd.classList.add('delbutton');
    deleteButton.innerText = "削除";
    deleteButton.onclick = function () {
      deleteTask(i);
    };
    deleteTd.appendChild(deleteButton);
    taskTr.appendChild(deleteTd);
    
    console.log(taskTr);
    table.appendChild(taskTr);
  }
}


function deleteTask(deleteIndex) {
  tasks.splice(deleteIndex, 1);
  displayTaskList();
}