import { useEffect, useState } from "react";
import { getAnswers } from "../../../api";
import DraftCard from "./AnswersCard";
import styles from "./style.module.sass";

const PanelAnswer = () => {
  const [answers, setAnswers] = useState<any>();
  const [username, setUsername] = useState<string>("");
  const [filteredAnswers, setFilteredAnswers] = useState<any>();

  useEffect(() => {
    getAnswers().then((res: any) => {
      setAnswers(res.data);
      setFilteredAnswers(res.data);
    });
  }, []);

  useEffect(() => {
    if (username) {
      const filtered = answers.filter(
        (data: any) =>
          data.attributes.users &&
          data.attributes.users.data.attributes.username
            .toLowerCase()
            .includes(username.toLowerCase())
      );
      setFilteredAnswers(filtered);
    } else {
      setFilteredAnswers(answers);
    }
  }, [username, answers]);

  return (
    <section className={styles.answers}>
      <div className={styles.answers__title}>
        <h2>Ответы от пользователей</h2>
      </div>
      <div>
        <h2>Вы можете найти ответ по пользователю</h2>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
      </div>
      <div className={styles.answers__cards}>
        {filteredAnswers &&
          filteredAnswers.map((data: any, index: number) => {
            console.log(data.attributes);

            return (
              <DraftCard
                key={index}
                date={data.attributes.createdAt}
                username={
                  data.attributes.users &&
                  data.attributes.users.data.attributes.username
                }
                answers={data.attributes.answer}
                avatar={
                  data.attributes.users &&
                  data.attributes.users.data.attributes.avatarka.data.attributes
                    .url
                }
                question={data.attributes.question.data.attributes.title}
              />
            );
          })}
      </div>
    </section>
  );
};

export default PanelAnswer;
