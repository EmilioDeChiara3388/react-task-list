const mainTitle = "Welcome to my React App!"

const tasks = [
    {
        id: 1,
        title: "Implementare la homepage",
        priority: 1,
        estimatedTime: 120,
        state: "completed"
    },
    {
        id: 2,
        title: "Sviluppare il menu di navigazione",
        priority: 2,
        estimatedTime: 60,
        state: "completed"
    },
    {
        id: 3,
        title: "Creare il footer del sito",
        priority: 3,
        estimatedTime: 30,
        state: "completed"
    },
    {
        id: 4,
        title: "Ottimizzare le performance",
        priority: 1,
        estimatedTime: 180,
        state: "completed"
    },
    {
        id: 5,
        title: "Scrivere test per i componenti",
        priority: 2,
        estimatedTime: 90,
        state: "completed"
    },
    {
        id: 6,
        title: "Implementare la pagina dei contatti",
        priority: 3,
        estimatedTime: 60,
        state: "completed"
    },
    {
        id: 7,
        title: "Aggiungere animazioni CSS",
        priority: 2,
        estimatedTime: 30,
        state: "backlog"
    },
    {
        id: 8,
        title: "Integrare l'API di autenticazione",
        priority: 1,
        estimatedTime: 120,
        state: "in_progress"
    },
    {
        id: 9,
        title: "Aggiornare la documentazione",
        priority: 3,
        estimatedTime: 60,
        state: "backlog"
    },
    {
        id: 10,
        title: "Rifattorizzare il codice CSS",
        priority: 2,
        estimatedTime: 90,
        state: "in_progress"
    }
];

const completedTasks = tasks.filter(task => task.state === "completed")
//console.log(completedTask);

const currentTasks = tasks.filter(task => task.state !== "completed")
//console.log(currentTask);




console.log(tasks);

export default function AppMain() {
    return (
        <main>
            <section className="current">
                <h2>Current Task</h2>
                <ul>
                    {currentTasks.map(currentTask => {
                        return <li key={currentTask.id}>
                            <p>{currentTask.title}<span>{currentTask.state}</span></p>
                            <p>Priority: {currentTask.priority}</p>
                            <p>Est time {currentTask.estimatedTime}</p>
                        </li>

                    })}
                </ul>
            </section>
            <section className="completed">
                <h2>Completed Task</h2>
                <ul>
                    {completedTasks.map(completedTask => {
                        return <li key={completedTask.id}>
                            <p>{completedTask.title}<span>{completedTask.state}</span></p>
                            <p>Priority: {completedTask.priority}</p>
                            <p>Est time {completedTask.estimatedTime}</p>
                        </li>

                    })}
                </ul>
            </section>
        </main>
    )
}