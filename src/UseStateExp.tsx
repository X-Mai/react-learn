import { useState } from "react";

interface test {
    test1: boolean;
}
const test =  ()=>{
    // 推断类型为 "boolean"   useState Hook 会重用作为初始 state 传入的值以确定值的类型
    // const [enabled, setEnabled] = useState(false);

    // 显式设置类型为 "boolean"
    const [enabled, setEnabled] = useState<boolean>(false);

    // 如果对应的类型需要指定对应的联合类型时候,也就是指定对应的值
    type Status = "idle" | "loading" | "success" | "error";
    const [status, setStatus] = useState<Status>("idle");

    // 让联合类型的每个分支排版更清晰写法 ,美化写法,更清晰结构方便维护
    type Status1 = 
        | "idle" 
        | "loading" 
        | "success" 
        | "error";
    const [status1, setStatus1] = useState<Status1>("idle");


    // 使用state结构原则
    type RequestState =
        | { status: 'idle' }
        | { status: 'loading' }
        | { status: 'success', data: any }
        | { status: 'error', error: Error };
    // 完全等价
    // type RequestState =
    //     { status: 'idle' }
    //     | { status: 'loading' }
    //     | { status: 'success', data: any }
    //     | { status: 'error', error: Error };
    const [requestState,SetRequestState] = useState<RequestState>({status: 'idle'})
}