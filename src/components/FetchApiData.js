const useBooks = () => {

  const loadBooks = async ()=> {  
    const url = "https://www.googleapis.com/books/v1/volumes?q=subject:art&printType=books&filter=paid-ebooks&startIndex=0&maxResults=10";
    const response = await fetch(url); 
    const books = await response.json();
  }

  return {
    books,
    loadBooks,
  }

}

export default useBooks;