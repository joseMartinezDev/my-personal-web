import React from "react";
import weatherIcon from "../../../assets/portfolio-cards/totanaweather.png";
import businessIcon from "../../../assets/portfolio-cards/totanabusiness.png";
import theEditIcon from "../../../assets/portfolio-cards/theedit.png";
import Figure from "react-bootstrap/Figure";
import PropTypes from "prop-types";
import {
  weatherApp,
  businessApp,
  theEditApp,
  weatherAppLink,
  businessAppLink,
  theEditAppLink,
} from "../../../utils/constants";

const PortfolioCards = ({ translate, cardName }) => {
  let card_description = "portfolio.";
  let card_icon = "";
  let classNameBluePointer = "";
  let card_link = "";

  switch (cardName) {
    case weatherApp:
      card_description = card_description.concat("cardWeather.");
      card_icon = weatherIcon;
      card_link = weatherAppLink;
      break;
    case businessApp:
      card_description = card_description.concat("cardBusiness.");
      card_icon = businessIcon;
      card_link = businessAppLink;
      break;
    case theEditApp:
      card_description = card_description.concat("cardTheEdit.");
      card_icon = theEditIcon;
      card_link = theEditAppLink;
      classNameBluePointer = "blue-pointer";
  }

  return (
    <article className="portfolio-card-container">
      <a className="portfolio-card-link" target="_blank" rel="noreferrer" href={card_link}>
        <Figure className={classNameBluePointer}>
          <Figure.Image className="portfolio-card-image" alt={cardName} src={card_icon} />
          <Figure.Caption className="portfolio-card-caption">
            {translate(card_description.concat("desc"))}
          </Figure.Caption>
        </Figure>
      </a>
    </article>
  );
};

PortfolioCards.propTypes = {
  translate: PropTypes.func,
  cardName: PropTypes.string,
};
export default PortfolioCards;
