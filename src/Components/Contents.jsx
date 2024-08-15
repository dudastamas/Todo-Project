export default  function Contents ({chosenProject}){
    if(!chosenProject){
        return <p>Choose Project!</p>
    }

    return(
        <div>
            <h2 className="text-2xl font-bold mb-4">{chosenProject.name}</h2>
            <p>{chosenProject.description}</p>
            <ul>
                {chosenProject.tasks.map((task) => <li key = {task.id}>{task.title}</li>)}
            </ul>
        </div>
    )
}