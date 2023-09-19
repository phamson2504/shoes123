import "./Brands.css"

function Brand({ handleClick }) {
  return (
    <>
      <div>
        <div className="brand-title">Recommended</div>
        <div className="brands-btns">
          <button className="btns" onClick={handleClick} value="">All Products</button>
          <button className="btns" onClick={handleClick} value="Nike" >Nike</button>
          <button className="btns" onClick={handleClick} value="Adidas">Adidas</button>
          <button className="btns" onClick={handleClick} value="Puma" >puma</button>
          <button className="btns" onClick={handleClick} value="Vans" >Vans</button>
          <div className="dropdown-product">
            <select onChange={handleClick}>
              <option value="">Other product</option>
              <option value="sneakers">Sneakers</option>
              <option value="flats">Flats</option>
              <option value="sandals">Sandals</option>
              <option value="heels">Heels</option>
            </select>
          </div>
        </div>
      </div>
    </>


  )
}

export default Brand;
