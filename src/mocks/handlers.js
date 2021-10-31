import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://www.googleapis.com/books/v1/volumes&printType=books&filter=paid-ebooks&startIndex=0&maxResults=10&langRestrict=en",
    async (req, res, ctx) => {
      const resp = res(
        ctx.json({
          items: [
            {
              volumeInfo: {
                title: "Harry",
                authors: ["Potter"],
                publisher: "Magia",
                description: "It's okay",
                pageCount: "100000",
                imageLinks: {
                  thumbnail:
                    "https://pbs.twimg.com/profile_images/3604358312/e784593ed966bc42476eab53261b8b09_400x400.jpeg",
                },
              },
              saleInfo: {
                listPrice: {
                  amount: "0.00",
                },
              },
            },
            {
              volumeInfo: {
                title: "Harriett",
                authors: ["Potty"],
                publisher: "Magic",
                description: "It's better",
                pageCount: "100001",
                imageLinks: {
                  thumbnail:
                    "https://images-cdn.9gag.com/photo/aAexQ89_700b.jpg",
                },
              },
              saleInfo: {
                listPrice: {
                  amount: "0.00",
                },
              },
            },
          ],
        })
      );
      return resp;
    }
  ),

  rest.get(
    "https://justmybooks.herokuapp.com/mybooks",
    async (req, res, ctx) => {
      const resp = res(
        ctx.json([
          {
            volumeInfo: {
              title: "Harry",
              authors: ["Potter"],
              publisher: "Magia",
              description: "It's okay",
              pageCount: "100000",
              imageLinks: {
                thumbnail:
                  "https://pbs.twimg.com/profile_images/3604358312/e784593ed966bc42476eab53261b8b09_400x400.jpeg",
              },
            },
            saleInfo: {
              listPrice: {
                amount: "0.00",
              },
            },
          },
          {
            volumeInfo: {
              title: "Harriett",
              authors: ["Potty"],
              publisher: "Magic",
              description: "It's better",
              pageCount: "100001",
              imageLinks: {
                thumbnail: "https://images-cdn.9gag.com/photo/aAexQ89_700b.jpg",
              },
            },
            saleInfo: {
              listPrice: {
                amount: "0.00",
              },
            },
          },
        ])
      );
      return resp;
    }
  ),
];
