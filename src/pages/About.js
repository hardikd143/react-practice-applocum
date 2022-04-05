import React from "react";

function About(props) {
    const aboutusWrapper = {
padding:'20px 10px',
borderRadius:'10px',
background:'#f1f1f1',
marginTop:'20px',
    }
  document.title= `${props.title}`

  return (
    <>
      <div className="container">
        <div style={aboutusWrapper}>
          <h2>About Us</h2>
          <p className="" style={{marginTop:'10px'}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum unde
            distinctio eius recusandae dolore, sed suscipit. Doloremque
            explicabo dolores inventore, cupiditate esse est illum facere culpa
            illo porro, qui ab, totam laudantium quod veritatis alias nihil sit.
            Atque aperiam velit tempora ipsum, reiciendis cumque, impedit optio
            aspernatur, aliquam praesentium rem quibusdam! Aliquam sint
            repellendus placeat, molestias iste nihil voluptas accusamus dolores
            vero dolor, minus distinctio quidem assumenda animi culpa
            asperiores, facilis suscipit saepe quam reprehenderit dolorem est.
            Autem ipsam sint, at delectus a incidunt explicabo eveniet placeat,
            mollitia ab amet odit atque. Obcaecati dolores sit dolorem, vitae
            itaque quidem facilis!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
