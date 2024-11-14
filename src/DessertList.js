import App from "./App"
function DessertList(props){
    const filterPrice = props.data
    .filter((num)=> {
        return num.price >10;
    })
    .sort((a,b)=> {
        return a.price - b.price;
    })
    .map((cafe)=>{
        return (
            <li>
                {cafe.name} - {cafe.price}
            </li>
        )
    });
   
    return <ul>{filterPrice}</ul>

}

export default DessertList