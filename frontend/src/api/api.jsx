
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

    getPostList () {
        return fetch(
          this.url + `/api/news/`,
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