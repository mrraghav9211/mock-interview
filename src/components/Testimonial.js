import React, { useState, useEffect } from "react";
import { data } from "../util";

const Testimonial = () => {
    const mystyle = {
        opacity: 1,
        border:"3px solid yellow",
        borderStyle: "dashed",
        overflow:"hidden",
        width:"70px",
        height:"70px"
      };
      const opacityDown = {
        opacity: 0.3,
      };
  var half_length = data.filter((elem, idx) => idx <= data.length / 2);
  var data1 = data.filter((elem, idx) => idx > data.length / 2);
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [discri, setDiscri] = useState()
  let [counter, setcounter] = useState(0);
  const rigthClick = () => {
    let n = counter;
    n++;
    if (n < data.length) setcounter(n);
    else setcounter(0)
  };
  const leftClick = () => {
    let n = counter;
    n--;
    if (n >= 0) setcounter(n);
  };
  // setTimeout(()=>{
  //   rigthClick()
  // },4000)
  useEffect(() => {
    setImg(data[counter].image);
    setName(data[counter].name);
    setCompany(data[counter].company);
    setDiscri(data[counter].discription)
  }, [counter]);

  return (
    <div className="container">
      <section className="left-side">
        <div className="left">
          {half_length.map((elem, idx,key) => (
            <img
              src={elem.image}
              id={idx}
              style={idx===counter?mystyle:opacityDown}
              className={idx % 2 === 0 ? "design-even" : "design-odd"}
              onClick={(e)=> setcounter(parseInt(e.target.id))}
              alt=""
            />
          ))}
        </div>
      </section>
      <section className="middle">
        <div className="details">
          <h2> <span style={{color:'green'}}>Thousants</span> of lives changed</h2>
          <p>Hear it from the once who have been on this journey already</p>
        </div>
        <div className="right-left">
          <span onClick={leftClick}>
            <i className="fa-solid fa-chevron-left"></i>
          </span>

          <div className="card">
            <div className="image-container">
              <img src={img} alt="" />
              <p>{name}</p>
              <h3>{company}</h3>
            </div>
            <hr />
            <div>
              <p>{discri}</p>
              <button style={{color:'green'}}>Read More</button>
            </div>
          </div>
          <span onClick={rigthClick}>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
        <div>
          <button className="btn">Read More Testinonial</button>
        </div>
      </section>
      <section className="right-side">
        <div className="left">
          {data1.map((elem, idx,key) => (
            <img
              src={elem.image}
              id={idx}
              style={idx + half_length.length===counter?mystyle:opacityDown}
              className={idx % 2 === 0 ? "design-even" : "design-odd"}
              onClick={(e)=>setcounter(parseInt(e.target.id)+6)}
              alt=""
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
