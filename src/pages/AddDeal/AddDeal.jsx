import { useState, useRef, useEffect } from "react"

function AddDeal(props) {
  const formElement = useRef()
	const [formData, setFormData] = useState({
    title: '',
    origPrice: 0,
    salePrice: 0,
    dealLink: '',
    details: ''
  })
  const [validForm, setValidForm] = useState(false)
  
  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddDeal(formData)
  }

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  return (
		<>
			<h1>Add Deal</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Item Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="title-input"
						name="title"
            value={formData.title}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Original Price (required)
					</label>
					<input 
						type="number"
						className="form-control"
						id="origPrice-input"
						name="origPrice"
            value={formData.origPrice}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Sale Price
					</label>
					<input 
						type="number"
						className="form-control"
						id="salePrice-input"
						name="salePrice"
            value={formData.salePrice}
            onChange={handleChange}
            required
					/>
				</div>
				<div className="form-group mb-5">
					<label htmlFor="age-input" className="form-label">
						Deal Link (URL)
					</label>
					<input 
						type="url"
						className="form-control"
						id="dealLink-input"
						name="dealLink"
            value={formData.dealLink}
            onChange={handleChange}
            required
					/>
				</div>
				<div className="form-group mb-6">
					<label htmlFor="age-input" className="form-label">
						Details
					</label>
					<input 
						type="text"
						className="form-control"
						id="details-input"
						name="details"
            value={formData.details}
            onChange={handleChange}
            required
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Deal
					</button>
				</div>
			</form>
		</>
	)
}

export default AddDeal