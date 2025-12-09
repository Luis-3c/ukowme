"use client"

import { useContext, useRef, useState } from "react";
import styles from "./newQuestion.module.css";
import { userContext } from "@/context/userContext";

export default function NewQuestion(){
  const { user } = useContext<any>(userContext);
  const newQuestionInput = useRef<HTMLTextAreaElement>();
  const answerInput = useRef<HTMLTextAreaElement>();
  const [newQuestionFocus, setNewQuestionFocus] = useState(false);
  const [showAnswerInput, setShowAnswerInput] = useState(false);

  const onClickOutOfInput = () => {
    newQuestionInput?.current?.focus();
  };

  const next = async() => {
    const input = newQuestionInput.current;
    if (input && input.value.trim().length > 0)
      await setShowAnswerInput(true);
    answerInput?.current?.focus();
  };

  return (
    <div className={styles.newQuestionContainer +  'p-0 border border-violet-400 rounded-lg'}>
      <textarea
        id={styles.newQuestionInput}
        type="text"
        className="form w-full rounded-md py-3 px-5  bg-transparent "
        placeholder={"Hi " + user.name + ", add a new question"}
        onFocus={() => setNewQuestionFocus(true)}
        ref={newQuestionInput}
      />
      {showAnswerInput && (
        <section>
          <hr />
          <textarea
            id={styles.newQuestionInput}
            type="text"
            className="form w-full rounded-md py-3 px-5  bg-transparent "
            placeholder={"Add answer"}
            onFocus={() => setNewQuestionFocus(true)}
            ref={answerInput}
          />
        </section>
      )}
      <div
        className="send-container"
        style={{
          display: newQuestionFocus ? "flex" : "none",
          justifyContent: "flex-end",
          opacity: newQuestionFocus ? "1" : "0",
          visibility: newQuestionFocus ? "visible" : "hidden",
          overflow: "hidden",
          transition:
            "opacity 0.4s ease-in-out, visibility 0s ease-in-out 0.4s",
        }}
        onClick={onClickOutOfInput}
      >
        <button className="py-2 px-5 rounded-lg text-sm" onClick={next}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
