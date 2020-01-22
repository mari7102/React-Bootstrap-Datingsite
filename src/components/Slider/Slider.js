import React from "react";
import Forelsket from "../../img/forelsket_par.jpg";
import Homopar from "../../img/homo_par.jpg";
import Ældrepar from "../../img/ældre_par.jpg";
import Lesbiskpar from "../../img/lesbisk_par.jpg";
import {Link} from "react-router-dom"


import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer className="col-12 p-0">
      <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={Forelsket} alt="Par med ballon"/>

              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h4 className="h4-responsive">Velkommen til True Match</h4>
              <button className="btn btn-lg btn-outline-dark col-lg-2 col-md-5" type="button"><Link className="text-decoration-none text-white btn-outline" to="/Registrer">Opret dig her</Link></button>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src={Homopar} alt="Homopar" />

              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">ALLE FORTJENER AT FINDE KÆRLIGHEDEN</h3>
              <p>Mulighed for at chat og cam</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src={Ældrepar} alt="Ældrepar" />

              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Alderen har ingen grænse</h3>
              <p>Pensionsrabat</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100" src={Lesbiskpar} alt="Ældrepar" />

              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Alle er velkommen</h3>
              <p>Studierabet</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;

