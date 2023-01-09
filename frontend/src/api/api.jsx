
class Api {
    constructor (headers) {
      this.headers = headers
      this.url = 'http://localhost'
    }


    checkResponse (res) {
      return new Promise((resolve, reject) => {
        const func = res.status < 400 ? resolve : reject
        res.json().then(data => {
          func(data)})
      })
    }

    getPostList (limit, page) {
        return fetch(
          this.url + `/api/news/?${limit}`,
          {
            method: 'GET',
            headers: {
              ...this.headers,
            },
          }
        )
        .then(this.checkResponse)
      }

      getLastFourItems (limit, page) {
        return fetch(
          this.url + `/last_four_items/`,
          {
            method: 'GET',
            headers: {
              ...this.headers,
            },
          }
        )
        .then(this.checkResponse)
      }
}

export default  new Api({ 
    'content-type': 'application/json',
    'accept': 'application/json'
  
  })