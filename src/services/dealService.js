import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/deals`

async function create(deal) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(deal)
  })
	return res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}

async function deleteOne(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

async function update(deal) {
  const res = await fetch(`${BASE_URL}/${deal._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(deal)
  })
  return res.json()
}

async function show(deal) {
  const res = await fetch(`${BASE_URL}/${deal._id}`)
  return res.json()
}

async function saveDeal(deal) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(deal)
  })
  return await res.json()
}

export {
	create,
  getAll,
  deleteOne,
  update,
  show,
  saveDeal
}