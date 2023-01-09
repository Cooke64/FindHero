
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
          // this.url + `/api/news/?${limit}&offset=2`,
          `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`,
          // 'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2',
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