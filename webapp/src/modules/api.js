const API_URL = 'http://localhost:8080'

const fetchThis = (url, options = {}) => {

	return fetch(`${API_URL}/plants`, options)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

export const getPlants = () => {
	const url = `${API_URL}/plants`;
	var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')
    var options = {
      method: 'GET',
      headers: myHeaders
    }
	return fetchThis(url, options);
}


export const createPlant = data => {
	const url = `${API_URL}/plants`;
	var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')
    var options = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data)
    }	
    fetch(url, options)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}


export const editPlant = data => {
	const url = `${API_URL}/plants`;
	var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')
    var options = {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify(data, (key, value) => {
        if (value != "") return value
      })
    }	
    fetch(url, options)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}


export const removePlant = data => {
	const url = `${API_URL}/plants`;
	var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')
    var options = {
      method: 'DELETE',
      headers: myHeaders,
      body: JSON.stringify(data)
    }	
    fetch(url, options)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}
