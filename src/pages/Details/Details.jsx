import { useState, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

function Details({ randDogImgId, handleDeleteDeal, user }) {
	const location = useLocation()
  
  const [dealData, setDealData] = useState({})  
  
  // const handleChange = evt => {
	// 	setFormData({ ...formData, [evt.target.name]: evt.target.value })
	// }

  const handleSubmit = evt => {
		evt.preventDefault()
    // handleUpdateDeal(formData)
	}

	useEffect(() => {
		const fetchDetails = async () => {
			await setDealData(location.state.deal) 
		}
		fetchDetails()
	}, [location.state.deal])

  return (
		<>
			<h1>Details!</h1>
			<h3>Item Name: {dealData.title}</h3>
			<h3>Original Price: $ {dealData.origPrice}</h3>
			<h3>Sale Price: $ {dealData.salePrice}</h3>
			<h3>See Deal Here: <a target="_blank" rel="noreferrer" href={dealData.dealLink}>DEAL LINK</a></h3>
			<h3>Details: {dealData.details}</h3>
			{/* <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Item Name: {dealData.title}
					</label>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Original Price: $ {dealData.origPrice}
					</label>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Sale Price: $ {dealData.salePrice}
					</label>
				</div>
				<div className="form-group mb-5">
					<label htmlFor="age-input" className="form-label">
						See Deal Here: <a target="_blank" rel="noreferrer" href={dealData.dealLink}>DEAL LINK</a>
					</label>
				</div>
				<div className="form-group mb-6">
					<label htmlFor="age-input" className="form-label">
						Details: {dealData.details}
					</label>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Save Deal
					</button>
				</div>
			</form> */}
			{user?.profile === dealData.owner?._id && (
				
				<div className="card-footer">
          <Link 
            className="btn btn-sm btn-warning m-left" 
            to="/edit" 
            state={{ dealData }}
          >
            Edit
          </Link>
          <button
            className="btn btn-sm btn-danger m-left"
            onClick={() => handleDeleteDeal(dealData._id)}
          >
            Delete
          </button>
        </div>
      )}
			:
			<div className="d-grid">
					<Link
						to="/"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
		</>
	)
}

export default Details