import {useMemo} from "react"

export const useSortedPosts = (items, sort) => {
    const sortedItems = useMemo(()=> {
        if (sort) {
          return [...items].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return items
      }, [sort, items])
      return sortedItems
}

export const useNewsItems = (items, sort, query) => {
    const sortedItems = useSortedPosts(items, sort)
    const sortedSelectItems = useMemo(
        () =>
       { return sortedItems.filter(post => post.title.includes(query))},
        [sortedItems, query])
     
    return sortedSelectItems
}

export const usePagesArray = (totalPages) => {
  const makeArray = (totalPages) => {
    let arr = []
    for (let index = 0; index < totalPages; index++) {
      arr.push(index + 1);
    }
    return arr
  }
  
  const pagesArray = useMemo(() => {
    let array = makeArray(totalPages)
    
    return array
  }, [totalPages])
    
    return pagesArray
}