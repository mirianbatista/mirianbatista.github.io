import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <img alt={projects.title} src={projectImage} />
            <hr style={{width:"90%", margin:"5%"}}/>
            <div style={{ textAlign: "center", lineHeight: '1.4', marginTop: "5%" }}>{projects.title}</div>
          </div>
          <div className="popup-modal">
            <div style={{ textAlign: "center" }}><a style={{ color:"#FE6928" }} href={projects.url}>{projects.description}</a></div>
          </div>
          {/*width:"60%", borderTop: "1px solid #1ABC9C", paddingTop: "2px", */}
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1  style={{ fontWeight: "bold" }}>Conheça alguns projetos em que eu trabalhei!</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
