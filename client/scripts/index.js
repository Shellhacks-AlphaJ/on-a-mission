// const and let
let root = document.getElementById('root')

// noTaskAvailable should be true unless there are tasks in TaskManager
let noTaskAvailable = true

function createNoTaskAvailableHTML(root, noTaskAvailable) {
    if (noTaskAvailable == true) {
        let noTaskAvailableString =
            '<div id="beginNewTaskContainer">' +
            '<img src="images/pandaheadphones.png">' +
            '<div id="noTasksAvailable">No tasks available.<br>Start a new task?</div>' +
            '<div id="startTaskButton"><button type="button">Start a Task</button></div>' +
            '<div id="createMissions"></div>' +
            '</div>'
        root.innerHTML += noTaskAvailableString
    } else {
        return
    }
}

// hides the taskContainer and must have noTaskAvailable initialized
function hideNoTaskAvailableHTML() {
    let beginNewTaskContainer = document.getElementById('beginNewTaskContainer')
    beginNewTaskContainer.style.display = 'none'
}

// onInitialStartButtonClick should hide the noTaskAvailable HTML and prompt the taskManager creation
function onInitialStartTaskButtonClick() {
    hideNoTaskAvailableHTML()

    // <div id="taskManager">
    let taskManagerContainer = document.createElement('div')
    taskManagerContainer.id = 'taskManager'

    // <
    // let taskQuestionId = document.createElement('div')
    // let taskQuestionText = document.createTextNode("What's your question huh?")
    // taskQuestionId.appendChild(taskQuestionText)

    // taskManagerContainer.appendChild(taskQuestionId)
    root.appendChild(taskManagerContainer)
}

function createNewTaskHTML() {
    let taskManagerContainer = document.getElementById('taskManager')

    // <div class="task">
    let task = document.createElement('div')
    task.classList.add('task')

    // <div id="taskQuestion" class="question">What's your task?</div>
    let taskQuestion = document.createElement('div')
    taskQuestion.classList.add('task-question')
    let taskQuestionText = document.createTextNode("What's your task?")
    taskQuestion.appendChild(taskQuestionText)
    // TODO: Create a FORM for user to input

    // <div id="difficultyLevelQuestion" class="question">Difficulty Level?</div>
    let difficultyQuestion = document.createElement('div')
    difficultyQuestion.classList.add('difficulty-question')
    let difficultyQuestionText = document.createTextNode('Difficulty Level?')
    difficultyQuestion.appendChild(difficultyQuestionText)

    displayDefaultDifficulty(difficultyQuestion)
    // displayEasyDifficulty(difficultyQuestion)
    // displayMediumDifficulty(difficultyQuestion)

    // difficultyQuestion.appendChild()
    //         <div id="difficultyLevelQuestion" class="question">Difficulty Level?</div>
    //         <ul>
    //             <li><button type="button" onclick="selectDifficulty(1)">1</button></li>
    //             <li><button type="button" onclick="selectDifficulty(2)">2</button></li>
    //             <li><button type="button" onclick="selectDifficulty(3)">3</button></li>
    //             <li><button type="button" onclick="selectDifficulty(5)">5</button></li>
    //             <li><button type="button" onclick="selectDifficulty(7)">7</button></li>
    //         </ul>
    //     </div>

    task.append(taskQuestion)
    task.append(difficultyQuestion)
    taskManagerContainer.appendChild(task)
}

// display difficulty default
function displayDefaultDifficulty(difficultyQuestion) {
    // <ul>
    let difficultyOptionsList = document.createElement('ul')
    createDifficultyListItem(difficultyQuestion, difficultyOptionsList, 1)
    createDifficultyListItem(difficultyQuestion, difficultyOptionsList, 2)
    createDifficultyListItem(difficultyQuestion, difficultyOptionsList, 3)
    createDifficultyListItem(difficultyQuestion, difficultyOptionsList, 5)
    createDifficultyListItem(difficultyQuestion, difficultyOptionsList, 7)
    difficultyQuestion.appendChild(difficultyOptionsList)

    createDifficultyMarker(difficultyQuestion)
}

function displayMediumDifficulty(difficultyQuestion) {
    // <ul>
    let difficultyOptionsList = document.createElement('ul')
    createDifficultyListItem(difficultyQuestion, difficultyOptionsList, 1)
    createDifficultyListItem(difficultyQuestion, difficultyOptionsList, 2)
    createDifficultyListItem(difficultyQuestion, difficultyOptionsList, 3)
    createDifficultyListItem(difficultyQuestion, difficultyOptionsList, 5)
    difficultyQuestion.appendChild(difficultyOptionsList)
}

function displayEasyDifficulty(difficultyQuestion) {
    // <ul>
    let difficultyOptionsList = document.createElement('ul')
    createDifficultyListItem(difficultyQuestion, difficultyOptionsList, 1)
    createDifficultyListItem(difficultyQuestion, difficultyOptionsList, 2)
    createDifficultyListItem(difficultyQuestion, difficultyOptionsList, 3)
    difficultyQuestion.appendChild(difficultyOptionsList)

    createDifficultyMarker(difficultyQuestion)
}

function createDifficultyListItem(
    difficultyQuestion,
    difficultyOptionsList,
    num
) {
    // <li>
    let difficultyListItem = document.createElement('li')
    // <button type="button" onclick="selectDifficulty(1)">1</button>
    let difficultyOptionBtn = document.createElement('button')
    difficultyOptionBtn.type = 'button'
    difficultyOptionBtn.addEventListener('click', () =>
        onDifficultyBtnSelected(difficultyQuestion, num)
    )
    let numText = document.createTextNode('' + num)
    difficultyOptionBtn.appendChild(numText)
    difficultyListItem.append(difficultyOptionBtn)
    difficultyOptionsList.append(difficultyListItem)
}

function createDifficultyMarker(difficultyQuestion) {
    // difficulty marker should hover
    let difficultyInfo = document.createElement('div')
    difficultyInfo.classList.add('difficultyInfo')
    // Markers class represent textbox that provide information about certain topics
    // <div class="markers">?</div>
    let difficultyMarker = document.createElement('div')
    difficultyMarker.classList.add('marker')
    let difficultyMarkerText = document.createTextNode('?')
    difficultyMarker.appendChild(difficultyMarkerText)

    // <div class="difficultyLevels">Difficulty:<br>1: 0-2 hrs<br>2: 3-5 hrs<br>3: 1 day<br>5: 1-3 days<br>7: 1 week
    let difficultyLevels = document.createElement('div')
    difficultyLevels.classList.add('difficulty-levels')
    let difficultyLevelsText = document.createTextNode(
        'Difficulty:\n1: 0-2 hrs\n2: 3-5 hrs\n3: 1 day\n5: 1-3 days\n7: 1 week'
    )
    difficultyLevels.appendChild(difficultyLevelsText)

    difficultyInfo.appendChild(difficultyMarker)
    difficultyInfo.appendChild(difficultyLevels)
    difficultyQuestion.append(difficultyInfo)
}

function onDifficultyBtnSelected(difficultyQuestion, num) {
    // hide difficulty btns after selection
    console.log(num)
    if (num == 7) displayMediumDifficulty(difficultyQuestion)
    else if (num == 5) displayEasyDifficulty(difficultyQuestion)
    // if difficulty <= 3, display the timer
    return num
}

// Main
createNoTaskAvailableHTML(root, noTaskAvailable)
onInitialStartTaskButtonClick()
createNewTaskHTML()
