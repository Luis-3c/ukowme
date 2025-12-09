"use client";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ConfirmModal from "../confirmModal/ConfirmModal";
import { Question } from "@/interfaces/question";

interface Props {
  question: Question;
}

export default function QuestionCard({question}: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" rounded-md overflow-hidden border border-gray-600 bg-gray-950">
      <div className="px-6 py-4">
        <div className="text-lg mb-2">{question.question}</div>
        <p className="text-gray-400 text-base">
          {question.answer}
        </p>
      </div>
      <div className="px-6 pt-4 pb-4 mb-1 flex items-center justify-between">
        <span className="inline-block bg-gray-700 rounded-full px-4 py-1 text-sm  text-gray-400 mr-1">
          2 answers | 18 nov 2023
        </span>
        <FontAwesomeIcon
          className="text-green-400 transition-transform hover:scale-125 ml-auto"
          icon={faPenSquare}
        />
        <FontAwesomeIcon
          className="text-red-600 transition-transform hover:scale-125 ml-6"
          icon={faTrash}
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal && (
        <ConfirmModal
          content={"Are you sure you want to delete this question?"}
          closeModal={()=> setShowModal(false)}
        />
      )}
    </div>
  );
}
