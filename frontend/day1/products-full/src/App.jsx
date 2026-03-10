import {useState, useEffect} from "react";

function products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const limit = 6

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data));
  }, []);

  const filtered = products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  if(sort === "low") {
    filtered.sort((a,b) => a.price-b.price);
  }
  if(sort === "high") {
    filtered.sort((a,b) => b.price-a.price);
  }

  const start = (page-1) * limit;
  const paginatedProducts = filtered.slice(start, start + limit);

  return (
    <div>
      <h2>Products</h2>

      <input type="text"
      placeholder="Search Product"
      value={search}
      onChange={(e) => setSearch(e.target.value)} />

      <select onChange={(e) => setSort(e.target.value)}> 
        <option value="">Sort Price</option>
        <option value="low"> Low to High</option>
        <option value="high"> High to Low</option>
      </select>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
        marginTop: "20px"
      }}
      >
        {paginatedProducts.map((p) => (
          <div key={p.id} style={{border: "1px solid green" , padding:"10px"}}>
            <img src={p.image} width="100" height="100" />
            <h4>{p.title}</h4>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
      <div style={{marginTop: "20px"}}>
        <button onClick={() =>setPage(page-1)} disabled={page === 1}> Prev</button>
        <span style={{margin: "10px"}}> page {page}</span>
        <button onClick={() =>setPage(page + 1)} disabled={start + limit >= filtered.length}>Next</button>
      </div>
    </div>
  )
}

export default products;
