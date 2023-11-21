

const Calculate = (props) => {
    const count= props.count;
    const addedPopulation= count.reduce((addedPopulation, population)=>addedPopulation+population.population ,0);
    // let addedArea=0;
    // for(let i=0; i<count.length; i++){
    //     let area= count[i].area;
    //     addedArea+=area;
    // }
    const addedArea= count.reduce((addedArea,allArea)=>addedArea+allArea.area ,0);
    
    return (
        <div style={{border: "1px solid yellow"}}>
            <h2>Count: {count.length}</h2>
            <h3>Added Population: {addedPopulation}</h3>
            <h3>Added Area: {addedArea}</h3>
        </div>
    );
};

export default Calculate;