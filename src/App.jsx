import { useRef, useState } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import {
  ActiveTitle,
  ClearCompleted,
  addTitle,
  deletTitle,
  textDecoration,
  textDecorationAll,
} from "./counterSlice";

function App() {
  const { data } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const inputRef = useRef();

  const Submit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      title: inputRef.current.value,
      Completed: false,
    };
    dispatch(addTitle(newTodo));
    inputRef.current.value = "";
  };
  console.log(data);

  return (
    <>
      <header className="bm-d-dark w-100 h-100" />
      <main>
        <div>
          <form className="color-dark" onSubmit={Submit}>
            <label htmlFor="">
              <div className="div" />
              <input
                className="w-500 h-30 p b-5"
                type="text"
                placeholder="Create a new todo…"
                ref={inputRef}
                required
              />
            </label>
          </form>
          <div className="bc-white">
            <ul className="text overflow">
              {data?.map((item) => {
                return (
                  <li
                    style={{
                      padding: "5px",
                      "text-decoration-line": item.Completed
                        ? "line-through"
                        : "none",
                    }}
                    className="flex jcb"
                    key={item.id}
                  >
                    <div className="flex g-10">
                      <div
                        style={{
                          "background-color": item.Completed ? "#000" : "#fff ",
                        }}
                        onClick={() => dispatch(textDecoration(item.id))}
                        className="div3"
                      >
                        {item.Completed ? (
                          <img className="img" src="/icon-check.svg" alt="" />
                        ) : (
                          ""
                        )}
                      </div>
                      {item.title}
                    </div>
                    <div
                      className="pointer"
                      onClick={() => dispatch(deletTitle(item.id))}
                    >
                      <img src="/icon-cross.svg" alt="" />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex div2">
              <div>5 items left</div>
              <div className="g-10">
                <button
                  onClick={() => dispatch(textDecorationAll())}
                  className="b-none"
                >
                  <p>All</p>
                </button>
                <button
                  onClick={() => dispatch(ActiveTitle())}
                  className="b-none"
                >
                  <p>Active</p>
                </button>
                <button
                  onClick={() => dispatch(textDecorationAll())}
                  className="b-none"
                >
                  <p>Completed</p>
                </button>
              </div>
              <div>
                <button
                  onClick={() => dispatch(ClearCompleted())}
                  className="b-none"
                >
                  <p>Clear Completed</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
