import BooksContext from "./BooksContext"

const BooksContextProvider = (children) => {
  return (
    <BooksContext.Provider value={}>{children}</BooksContext.Provider>
  )
} 

export default BooksContextProvider;