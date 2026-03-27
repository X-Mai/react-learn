import { useReducer } from "react";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "参观卡夫卡博物馆", done: true },
  { id: 1, text: "看木偶戏", done: false },
  { id: 2, text: "打卡列侬墙", done: false },
];

export default function test() {
  test2();
  test3();
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return <div>测试</div>;
}

function test2() {
  const arr = [1, 2, 3, 4, 5];
  const sum = arr.reduce((result, number) => result + number); // 1 + 2 + 3 + 4 + 5
  console.log("xiaomai sum ===:", sum);
}

function test3() {
  let initialState = [];
  let actions = [
    { type: "added", id: 1, text: "参观卡夫卡博物馆" },
    { type: "added", id: 2, text: "看木偶戏" },
    { type: "deleted", id: 1 },
    { type: "added", id: 3, text: "打卡列侬墙" },
  ];
  let finalState = actions.reduce(tasksReducer, initialState);
  console.log("xiaomai test3 finalState====:", finalState);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("未知 action: " + action.type);
    }
  }
}
