import React, { useState } from "react";
import {useParams} from "react-router-dom"
import ReactStars from "react-stars";
import {useSelector}from "react-redux"
function Listeproduit({category}) {
  const [show, SetShow] = useState(false);
  const [show1, SetShow1] = useState(false);
  const [showb, SetShowb] = useState(false);
  const{category1}=useParams();
  const shops=useSelector(state=>state.shop.shoplist);
  console.log(category1)
  return (
    <div className="listproduit">
    
      <div className="list1">
    
      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{category1}
      </div>
      <div className="list2">
        <div className="pd1">
          <div className="d1">
            <div>
            <button onClick={()=>SetShowb(!showb)}  className={showb ? 'button  ': 'button buttonliste'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="white"
                  class="bi bi-table"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
                </svg>
              </button>
              <button onClick={()=>SetShowb(!showb)}  className={showb ? 'button buttonliste ': 'button '}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  class="bi bi-list-ul"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  />
                </svg>
              </button >
             
            </div>
            <div>
              <label>Sort By</label>
              <select>
                <option value="">Default</option>
                <option value="Name1">Name(A-Z)</option>
                <option value="Name2">Name(Z-A)</option>
                <option value="price1">Price(Low to High)</option>
                <option value="price2">Price(High to low)</option>
              </select>
            </div>
          </div>
          <div className="d2">
            {
            shops.filter((shop)=>shop.category==category1).map((shop,index)=>(
              <div  className={showb ? 'divp1 ': 'divp '}>
              <div className="img">
                <img src={shop.url} />
              </div>
              <div className="divD">
                <p >{shop.brands}</p>
               <div className="p1">{shop.description}</div>
               <div className="bg">
                  
                  <ReactStars
                    className="start2"
                    edit={false}
                    count={5}
                    size={24}
                    color2={"#ffd700"}
                    value={shop.raiting}
                  />
                
      </div>
             <div className="p2">{shop. price} DT</div>
          
           <div className="divshop">
            <button className="bt1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></button>
            <button className="bt2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></button>
            <button className="bt3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-zoom-in" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
  <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
</svg></button>
           </div>
              </div>
            </div>
            ))
            }
           
            
          </div>
        </div>
        <div className="pd2">
          {}
          <div className="categoryname">
          &nbsp;&nbsp;&nbsp;&nbsp;{category1}
          </div>
          {
            category1=="Computer" ? (
         <>    
<div  className={show ? 'brands2': 'brands'}>

        <div className="check check1">

 <p className="pbrand1">Brands</p>
<button onClick={() => SetShow(!show)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></button>
        </div>
        <div className="check">
     <input type="checkBox">
      
     </input>
<p>asus</p>

        </div>
        <div className="check">
     <input type="checkBox"></input>
<p>HP</p>

        </div>
        <div className="check">
     <input type="checkBox"></input>
<p>Lenovo</p>

        </div>
        <div className="check">
     <input type="checkBox"></input>
<p>HP</p>

        </div>
        </div>
        <div  className={show1 ? 'brands2': 'brands'}>

        <div className="check check1">

 <p className="pbrand1">Processor</p>
<button onClick={() => SetShow1(!show1)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></button>
        </div>
        <div className="check">
     <input type="checkBox">
      
     </input>
<p>Intel Core i3</p>

        </div>
        <div className="check">
     <input type="checkBox"></input>
<p>Intel Core i5</p>

        </div>
        <div className="check">
     <input type="checkBox"></input>
<p>Intel Core i7</p>

        </div>
        <div className="check">
     <input type="checkBox"></input>
<p>Intel Core i9</p>

        </div>
        </div>
        </> 
            ): null
          }
             {
            category1=="Phone & Tablet" ? (
              <>    
              <div  className={show ? 'brands2': 'brands'}>
              
                      <div className="check check1">
              
               <p className="pbrand1">Brands</p>
              <button onClick={() => SetShow(!show)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg></button>
                      </div>
                      <div className="check">
                   <input type="checkBox">
                    
                   </input>
              <p>Sumsung</p>
              
                      </div>
                      <div className="check">
                   <input type="checkBox"></input>
              <p>Xiaomi</p>
              
                      </div>
                      <div className="check">
                   <input type="checkBox"></input>
              <p>Oppo</p>
              
                      </div>
                      <div className="check">
                   <input type="checkBox"></input>
              <p>Infinix</p>
              
                      </div>
                      </div>
                      <div  className={show1 ? 'brands2': 'brands'}>
              
                      <div className="check check1">
              
               <p className="pbrand1">Processor</p>
              <button onClick={() => SetShow1(!show1)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg></button>
                      </div>
                      <div className="check">
                   <input type="checkBox">
                    
                   </input>
              <p>Octa Core</p>
              
                      </div>
                      <div className="check">
                   <input type="checkBox"></input>
              <p>
              Quad Core</p>
              
                      </div>
                
                   
                      </div>
                      </> 
                          ): null
                        }

          
        </div>
      </div>
    </div>
  );
}

export default Listeproduit;
