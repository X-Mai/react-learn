import { useState, useRef, useEffect } from "react";

function VideoPlayer({ src, isPlaying }) {
  console.log("xiaomai VideoPlayer......");
  const ref = useRef(null);

  /** 当前这个示例中不使用useEffect好像也能跑?因为if (ref.current) { ... }跳过了第一次渲染,只在后续更新时执行,看起来'能用',但是这只是巧合,是错误的写法,不是正确的机制
   * 错误1: 在组件渲染的过程中直接操作DOM(React 组件函数是用来计算 UI 的，不是执行副作用的) 违背react设计机制,执行操作dom的时机不对
   * 错误2: 函数体会无限次数执行,React 组件函数任何时候都可能重新执行 eg:父组件刷新/状态变化/父组件传参变化/甚至react未来的并发渲染
   * 错误3: ref 赋值时机不确定
   */
  // if (ref.current) {
  //   console.log("xiaomai ref 11111===:", ref, isPlaying);
  //   if (isPlaying) {
  //     ref.current.play();
  //   } else {
  //     ref.current.pause();
  //   }
  // }

  /* useEffect:渲染后执行，专门用来和外部系统（视频、DOM、服务器）同步
   * 注意: useEffect = 渲染后执行 + 依赖变化才触发  这里依赖的数组[isPlaying]是控制触发条件,只有isPlaying变化时候才会执行里面的逻辑
   * 终极正确理解:1.时机：所有 useEffect 都是渲染后执行（DOM 已更新） 2.依赖数组决定这次渲染后要不要执行
   * 为什么 useEffect 才是正确的？useEffect 的核心规则：在渲染完成、DOM 真正生成后，才会执行里面的代码
   */
  useEffect(() => {
    console.log("xiaomai VideoPlayer useEffect......", ref, isPlaying);
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "暂停" : "播放"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
