import {
  useMemo
} from "react"

export const useSortedPosts = (items, sort) => {
  const sortedItems = useMemo(() => {
    if (sort) {
      return [...items].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return items
  }, [sort, items])
  return sortedItems
}

export const useNewsItems = (items, sort, query) => {
  const sortedItems = useSortedPosts(items, sort)
  const sortedSelectItems = useMemo(
    () => {
      return sortedItems.filter(post => post.title.includes(query) || post.body.includes(query))
    },
    [sortedItems, query])

  return sortedSelectItems
}