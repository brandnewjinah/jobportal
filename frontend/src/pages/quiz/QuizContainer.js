import React, { useEffect, useState } from "react";
import { quizApi } from "../../services/api";

import QuizPresenter from "./QuizPresenter";

const QuizContainer = () => {
  const [quiz, setQuiz] = useState({});
  const [page, setPage] = useState(1);

  const getData = async () => {
    const quiz = await quizApi.quiz;
    const result = quiz.find((item) => item.page === page);
    setQuiz({ quiz: result });
  };

  useEffect(() => {
    getData();
  }, []);

  return <QuizPresenter {...quiz} />;
};

export default QuizContainer;
