import EnsemblePostListCSS from "./ensemble-post-list.module.css";
import PortraitPlaceholder from "../../media/portrait-placeholder.png";



const EnsemblePostList = ({ ensemble }) => {
  return (
    <div>
      <div className={EnsemblePostListCSS.default}>
        <h1>Ensemble posts</h1>
        <div className={EnsemblePostListCSS.card}>
          <div className={EnsemblePostListCSS.boks1}>
            <img
              src={PortraitPlaceholder}
              alt="portrait-placeholder"
              width="50px"
              height="50px"
            />
            <div>
              <h3>{ensemble.name}</h3>
              <p> <b>{ensemble.zipCode + " " + ensemble.city}</b> · {ensemble.members} musicians </p>
            </div>
          </div>
          <div className={EnsemblePostListCSS.boks2}>
            <h3> {ensemble.posts[0]}</h3>
            <p>  {ensemble.posts[1]}</p>
            <p>  {ensemble.posts[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnsemblePostList;
