import ProTypes from 'prop-types'
function List(props){

    const category = props.category;
    const itemList = props.items;


    
    // Alphabetical
    // fruits.sort((a,b)=> a.name.localeCompare(b.name));
    //Numeric
    // fruits.sort((a,b) => a.calories - b.calories);

    // const lowCalFruits = fruits.filter(fruit =>fruit.calories < 100);

    // const listItems =  lowCalFruits.map(lowCalFruit => <li key = {lowCalFruit.id} >
    //                                         {lowCalFruit.name}:&nbsp;
    //                                         <b>{lowCalFruit.calories}</b></li>)

    const listItems =  itemList.map(item => <li key = {item.id} >
                                            {item.name}:&nbsp;
                                            <b>{item.calories}</b></li>);
    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}
List,ProTypes = {
    category: ProTypes.string,
    items: ProTypes.arrayOf(ProTypes.shape({id:ProTypes.number,
                                            name:ProTypes.string,
                                            calories:ProTypes.number}))
}

export default List