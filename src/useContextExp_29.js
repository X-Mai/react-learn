import { useState, useEffect } from "react";
function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

// 自定义hook组件
function useOnlineStatus() {
  // 在自定义hook中测试调用内部自定义工具函数
  const test = [1, 3, 12, 4, 5];
  const test2 = getSorted(test);
  console.log("xiaomai useOnlineStatus===:", test, test2);

  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
}

function getSorted(items) {
  return items.slice().sort();
}

export default function App() {
  const firstNameProps = useFormInput("Mary");
  const lastNameProps = useFormInput("Poppins");

  return (
    <>
      <SaveButton />
      <StatusBar />

      <div>
        <label>
          First name:
          <input {...firstNameProps} />
        </label>
        <label>
          Last name:
          <input {...lastNameProps} />
        </label>
        <p>
          <b>
            Good morning, {firstNameProps.value} {lastNameProps.value}.
          </b>
        </p>
      </div>
    </>
  );
}

// 自定义hook  演示使用2
/**
 * 什么时候使用自定义 Hook 
 * 你没必要对每段重复的代码都提取自定义 Hook。一些重复是好的。例如像早前提取的包裹单个 useState 调用的 useFormInput Hook 就是没有必要的 
 * 这里只是学习演示练习
 */
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}
