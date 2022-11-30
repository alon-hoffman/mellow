
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { getActionRemoveBoard, getActionAddBoard, getActionUpdateBoard } from '../store/board.store.js'

import { store } from '../store/store'



const startingBoards = [
    {
        "_id": "b101",
        "title": "traco",
        "isStarred": false,
        "archivedAt": 1589983468418,
        "createdBy": {
            "_id": "u101",
            "fullname": "Alon",
            "imgUrl": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2465x1600/560d0ec362004ae022ec06afdb2b06ef/photo-1599974579688-8dbdd335c77f.jpg"
        },
        "style": {},
        "members": [
            {
                "_id": "u101",
                "fullname": "Alon Hoffman",
                "imgUrl": "https://www.google.com"
            },
            {
                "_id": "u102",
                "fullname": "Itai Morag",
                "imgUrl": "https://www.google.com"
            },
            {
                "_id": "u103",
                "fullname": "Erez Eitan",
                "imgUrl": "https://www.google.com"
            }
        ],
        "groups": [
            {
                "id": "g101",
                "title": "BackLog",
                "archivedAt": 1589983468418,
                "cards": [
                    {
                        "id": "c101",
                        "title": "Make Logo",
                        imgURL: "https://trello.com/1/cards/63860d3af434df009e75619b/attachments/638622d97e03e4019f8c5399/previews/638622d97e03e4019f8c53b9/download/%D7%94%D7%95%D7%A8%D7%93%D7%94.png"

                    },
                    {
                        "id": "c102",
                        "title": "Find employees",
                        members: [
                            {
                                "_id": "u101",
                                "fullname": "Alon Hoffman",
                                "imgUrl": "https://www.google.com"
                            },
                            {
                                "_id": "u102",
                                "fullname": "Itai Morag",
                                "imgUrl": "https://www.google.com"
                            },
                        ]
                    }
                ]
            },
            {
                "id": "g102",
                "title": "ToDo",
                "cards": [
                    {
                        "id": "c103",
                        "title": "ToDo",
                        labels: [
                            "important", "urgent"
                        ]
                    },
                    {
                        "id": "c104",
                        "title": "Research for prime locations and peak hours",
                        "priority": "high",
                        "description": "description",
                        "createdBy": "",
                        "checklists": [
                            {
                                "id": "YEhmF",
                                "title": "Checklist",
                                "todos": [
                                    {
                                        "id": "212jX",
                                        "title": "To Do 1",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "memberIds": ["u101"],
                        "labelIds": ["l101", "l102"],
                        "dueDate": 16156215211,
                        "byMember": {
                            "_id": "u101",
                            "username": "Tal",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        },
                        "style": {
                            "bgColor": "#26de81"
                        }
                    }
                ],
                "style": {}
            }
        ],
        "activities": [
            {
                "id": "a101",
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "card": {
                    "id": "c101",
                    "title": "Replace Logo"
                }
            }
        ],

        "cmpsOrder": ["status-picker", "member-picker", "date-picker"]
    }
]

const STORAGE_KEY = 'board'
const boardChannel = new BroadcastChannel('boardChannel')


    ; (() => {
        boardChannel.addEventListener('message', (ev) => {
            store.commit(ev.data)
        })
    })()

export const boardService = {
    query,
    getById,
    save,
    remove,
    getEmptyBoard,
}
window.cs = boardService


async function query(filterBy = { txt: '', price: 0 }) {
    var boards = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        boards = boards.filter(board => regex.test(board.vendor) || regex.test(board.description))
    }
    if (filterBy.price) {
        boards = boards.filter(board => board.price <= filterBy.price)
    }
    return boards

}
function getById(boardId) {
    return storageService.get(STORAGE_KEY, boardId)
    // return axios.get(`/api/board/${boardId}`)
}
async function remove(boardId) {
    await storageService.remove(STORAGE_KEY, boardId)
    boardChannel.postMessage(getActionRemoveBoard(boardId))
}
async function save(board) {
    var savedBoard
    if (board._id) {
        savedBoard = await storageService.put(STORAGE_KEY, board)
        boardChannel.postMessage(getActionUpdateBoard(savedBoard))

    } else {
        // Later, owner is set by the backend
        board.owner = userService.getLoggedinUser()
        savedBoard = await storageService.post(STORAGE_KEY, board)
        boardChannel.postMessage(getActionAddBoard(savedBoard))
    }
    return savedBoard
}

function getEmptyBoard() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




