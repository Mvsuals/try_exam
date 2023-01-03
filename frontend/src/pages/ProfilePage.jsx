import EditSetButtons from "../components/page-exclusive/edit-set-buttons";
import AddInstrumentButton from "../components/page-exclusive/add-instrument-button";
import ProfilePlaceholder from "../media/profile-placeholder.png";
import ProfilePageCSS from "./ProfilePage.module.css";
import CreateEnsembleButton from "../components/page-exclusive/create-ensemble-button";
import useFetch from "../useFetch";
import InstrumentList from "../components/page-exclusive/instrument-list";
import EnsembleList from "../components/page-exclusive/ensemble-list";
import EnsembleList2 from "../components/page-exclusive/ensemble-list2";

const ProfilePage = () => {
  const userId = localStorage.getItem("userId");

  const {
    data: user,
    isLoading,
    error,
  } = useFetch("http://127.0.0.1:3000/user/" + userId);

  const {
    data: ensembles,
  } = useFetch("http://127.0.0.1:3000/ensemble") + userId;


  return (
    <div>
      <div className={ProfilePageCSS.profileBoks1}>
        <img
          src={ProfilePlaceholder}
          alt="profile-placeholder"
          width="120px"
          height="120px"
        />
        <div className={ProfilePageCSS.description}>
          {error && <p>{error}</p>}
          {isLoading && <p>Loading...</p>}
          {user && <h1>{user.fname + " " + user.lname}</h1>}
          {user && <p>Created {user.createdAt}</p>}
        </div>
        <div className={ProfilePageCSS.buttons}>
          <EditSetButtons />
        </div>
      </div>
      <div className={ProfilePageCSS.profileBoks2}>
        <h1>Instruments</h1>
        <AddInstrumentButton />
      </div>
      <div className={ProfilePageCSS.profileBoks3}>

        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        {user && <InstrumentList user={user} />}

      </div>
      <div className={ProfilePageCSS.profileBoks4}>
        <h1>My ensembles</h1>
        <CreateEnsembleButton />
      </div>
      <div className={ProfilePageCSS.profileBoks3}>

     {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        {ensembles && <EnsembleList ensembles={ensembles} />}

      </div>
    </div>
  );
};

export default ProfilePage;
