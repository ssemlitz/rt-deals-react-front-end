import { Link } from "react-router-dom";

function DealCard({ deal, randDogImgId, handleDeleteDeal, user }) {
  return (
    <div className="card">
      <img
        src={`https://picsum.photos/id/${randDogImgId}/640/480`}
        alt="A happy puppy"
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-text">{deal.title}</h2>
        <p className="card-text">Original Price: {deal.origPrice}</p>
        <p className="card-text">Sale Price: {deal.salePrice}</p>
        <p className="card-text">Deal Link: {deal.dealLink}</p>
        <p className="card-text">Details: {deal.details}</p>
      <Link 
            className="btn btn-sm btn-secondary" 
            to="/details" 
            state={{ deal }}
          >
            Details
          </Link>
      </div>
      {/* {user?.profile === deal.owner._id && ( */}
        <div className="card-footer">
          <Link 
            className="btn btn-sm btn-secondary" 
            to="/details" 
            state={{ deal }}
          >
            Details
          </Link>
          <Link 
            className="btn btn-sm btn-warning m-left" 
            to="/edit" 
            state={{ deal }}
          >
            Edit
          </Link>
          <button
            className="btn btn-sm btn-danger m-left"
            onClick={() => handleDeleteDeal(deal._id)}
          >
            Delete
          </button>
        </div>
      {/* )} */}
    </div>
  );
}

export default DealCard;
