import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

function Details({ deal, randDogImgId, handleDeleteDeal, user }) {
	const location = useLocation()
  
  const [formData, setFormData] = useState(location.state.deal)

  const formElement = useRef()
  
  const [validForm, setValidForm] = useState(true)
  
  const handleSave = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const handleSubmit = evt => {
		evt.preventDefault()
    // handleUpdateDeal(formData)
	}

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (
		<>
			<h1>Details!</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Item Name: {formData.title}
					</label>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Original Price: $ {formData.origPrice}
					</label>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Sale Price: $ {formData.salePrice}
					</label>
				</div>
				<div className="form-group mb-5">
					<label htmlFor="age-input" className="form-label">
						See Deal Here: <a target="_blank" rel="noreferrer" href={formData.dealLink}>DEAL LINK</a>
					</label>
				</div>
				<div className="form-group mb-6">
					<label htmlFor="age-input" className="form-label">
						Details: {formData.details}
					</label>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Save Deal
					</button>
				</div>
        <div className="d-grid">
					<Link
						to="/"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
			</form>
			{/* {user?.profile === deal.owner._id && ( */}
        <div className="card-footer">
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
		</>
	)
}

export default Details