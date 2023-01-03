import EnsembleContentCSS from "./ensemble-content.module.css";
import Placeholder from "../../media/placeholder.jpg"

const EnsembleContent = ({ ensemble }) => {
  return (
    <div>
      <div className={EnsembleContentCSS.default}>
        <div className={EnsembleContentCSS.boks1}>
        <h1>{ensemble.name}</h1>
        <hr />
        <p>{ensemble.zipCode + " " + ensemble.city}</p>
        <div>
          <p>
            <b>Description</b>
          </p>
          <p>{ensemble.description}</p>
        </div>
        <div>
          <p>
            <b>Musicians</b>
          </p>
          <p>{ensemble.members} active members</p>
        </div>
        <div className={EnsembleContentCSS.buttons}>
          <a href={ensemble.website} target="_blank" className={EnsembleContentCSS.visitButton}>
            Visit Website
            </a>
          <a className={EnsembleContentCSS.joinButton}>Join Ensemble</a>
        </div>
        </div>
        <div className={EnsembleContentCSS.boks2}>
            <img src={Placeholder} alt="placeholder" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default EnsembleContent;
