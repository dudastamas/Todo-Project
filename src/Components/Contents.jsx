export default  function Contents ({project}){
    if(!project){
        return <p>Choose Project!</p>
    }

    return(
        <div>
            <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
            <p>{project.description}</p>
            <ul>
                {project.tasks.map((task) => <li>{task.title}</li>)}
            </ul>
        </div>
    )
}