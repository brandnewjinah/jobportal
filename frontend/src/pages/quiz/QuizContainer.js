import React, { useEffect, useState } from "react";
import { quizApi } from "../../services/api";

import QuizPresenter from "./QuizPresenter";

const QuizContainer = () => {
  const [quiz, setQuiz] = useState({});
  const [page, setPage] = useState(1);
  const [length, setLength] = useState();

  const getData = async () => {
    const quiz = await quizApi.quiz;
    setLength(quiz.length);
    const result = quiz.find((item) => item.page === page);
    setQuiz({ quiz: result });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handleNext = () => {
    if (page === length) {
      console.log("last page");
    } else {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <QuizPresenter {...quiz} handleNext={handleNext} handlePrev={handlePrev} />
  );
};

export default QuizContainer;
