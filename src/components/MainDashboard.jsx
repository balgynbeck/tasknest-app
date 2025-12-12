import styles from "./style.css";

function MainDashboard({ tasks }) {
  return (
    <main className={styles.container}>
      <h2>Главная панель</h2>

      <h3>Список задач</h3>

      {tasks.map((task) => (
        <div key={task.id} className={styles.taskItem}>
          <p>
            <b>ID:</b> {task.id}
          </p>
          <p>
            <b>Задача:</b> {task.title}
          </p>
          <p>
            <b>Статус:</b> {task.completed ? "Выполнено" : "В процессе"}
          </p>
        </div>
      ))}
    </main>
  );
}

export default MainDashboard;
