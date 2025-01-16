import {useState,useEffect} from "react"
const App=()=>
{
const [products,setProducts]=useState([]);
const [url,setUrl]=useState("http://localhost:8900/Fruits");
useEffect(()=>{
fetch(url)
.then(response=>response.json())
.then(data=>setProducts(data));
},[url]);
return(
<section>
<button className='button1'
onClick={()=>setUrl("http://localhost:8900/Fruits")}>ALL</button>
<button className="button1"
onClick={()=>setUrl("http://localhost:8900/Fruits?stock=true")}>Instock</button>

{
products.map((mydata)=>(//products is from array line 4
<div className='myDiv' key={mydata.id}>
<p>{mydata.id}</p>
<p>{mydata.name}</p>
<p>{mydata.price}</p>
<span className={mydata.stock?"stock":"unavailable"}>{mydata.stock ? "In Stock" : "Out of Stock"}</span>
</div>
))}
</section>
)//return closing
}
export default App;