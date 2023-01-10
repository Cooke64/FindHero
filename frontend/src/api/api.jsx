
class Api {
    constructor (headers) {
      this.headers = headers
      this.url = 'http://127.0.0.1:8000'
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
          this.url + `/api/news/?limit=${limit}`,
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
          this.url + `/api/news/last_four_items/`,
          {
            method: 'GET',
            headers: {
              ...this.headers,
            },
          }
        )
        .then(this.checkResponse)
      }

      getCurrentItem (id) {
        return fetch(
          this.url +  `/api/news/${id}`,
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