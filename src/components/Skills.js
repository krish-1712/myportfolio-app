import "./Skills.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="skill">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx" >
                <p style={{ fontSize: "20px", color: "white" }}>Professional Skills Set</p>

                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000" alt="js"   />
                  </div>
                  <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="html"/>
                  </div>
                  <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="css"  />
                  </div>
                  <div className="item">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react"  />

                  </div>
                  <div className="item">
                    <img src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" alt="mongodb"  />

                  </div>
                  <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="sql"  />

                  </div>
                  <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="node"  />

                  </div>
                  <div className="item">
                    <img src="https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000" alt="express" style={{backgroundColor:"white", width:"40%",height:"40%",marginTop:"40px"}} />

                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;

