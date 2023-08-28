import './carouselcomponent.css'

const CarouselComponent = () => {
    return (
      <div className="carousel_component">
        <div className="carousel_container">
          <div className="title_container">
              <h1>Spotpris</h1>
          </div>
          <div className="content_container">
            <div className="left_container">
              <p>Markedsprisen på strøm endrer seg gjennom året, og strømregningen din vil variere etter disse svingningene. </p>
              <p>Du må forvente høyere pris i vinterhalvåret, men kan nyte godt av lave strømpriser om sommeren. </p>
              <p>Spotpris har vist seg å være billigst i gjennomsnitt de siste årene.</p>
            </div>
            <div className="right_container">
              <img src="https://via.placeholder.com/300x300" alt="placeholder"/>
            </div>
          </div>
        </div>
      </div>
    )
};

export default CarouselComponent;