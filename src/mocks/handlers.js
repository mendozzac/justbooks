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
            id: 1,
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
            id: 2,
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

rest.get(
    "https://www.googleapis.com/books/v1/volumes/MY3QAgAAQBAJ",
    async (req, res, ctx) => {
      const resp = res(
        ctx.json(
          {
          "kind": "books#volume",
          "id": "MY3QAgAAQBAJ",
          "etag": "qSZrRY1vnyk",
          "selfLink": "https://www.googleapis.com/books/v1/volumes/MY3QAgAAQBAJ",
          "volumeInfo": {
            "title": "Japanese Things",
            "subtitle": "Being Notes on Various Subjects Connected with Japan",
            "authors": [
              "Basil Hall Chamberlain"
            ],
            "publisher": "Tuttle Publishing",
            "publishedDate": "2012-11-13",
            "description": "\u003cb\u003eArmchair travelers beware!\u003c/b\u003e\u003cbr\u003e\u003cbr\u003e\u003ci\u003eJapanese Things\u003c/i\u003e will lure you out of your cozy, comfy home and chair to an unusual country with bewitching manners and customs—and once you have succumbed to its spell you will never be the same. Here in one neat package you will meet the flavor, charm, and piquancy of old Japan—a revised reprint of one of the indispensable books on Japan, by the late Prof. Basil Hall Chamberlain, eminent British scholar who in the latter part of the 19th century \"taught Japanese and Japan to the Japanese.\"\u003cbr\u003e\u003cbr\u003eMany books in one, this monumental compilation contains such diversified subjects as Art and Abacus; Botany and Buddhism; Charms and Cherry Blossoms; Daimyos and Divination; Fairy Tales and Flowers; Gardens and Government; History and Hara-kiri; Law and Language; Marriage and Music; Poetry and Pottery; Shinto and Singing Girls (Geisha); Tea and Theater, and Writing and Wood Engraving. In this long-awaited reprint, in which the title has been changed from Things Japanese, the reader will encounter exquisite objects of daily Japanese life, the gardens and cultures of the fields, the harmony and balance in the fundamentals of day-by-day existence.\u003cbr\u003e",
            "industryIdentifiers": [
              {
                "type": "ISBN_10",
                "identifier": "1462908721"
              },
              {
                "type": "ISBN_13",
                "identifier": "9781462908721"
              }
            ],
            "readingModes": {
              "text": true,
              "image": true
            },
            "pageCount": 581,
            "printedPageCount": 548,
            "printType": "BOOK",
            "categories": [
              "Antiques & Collectibles / Reference",
              "History / Asia / Japan",
              "Art / Asian / Japanese",
              "Antiques & Collectibles / Furniture",
              "Antiques & Collectibles / Porcelain & China"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.11.12.0.preview.3",
            "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
            },
            "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/publisher/content?id=MY3QAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73sKF7aDe3RW0rddQmSDfPAYxyqJW0UG8v32Igd2a0AASxhfch8NnzVYRbjVEpCZwBZos7Zwm3sRJRdkkI1FYSDvydZTdr1bcGd8sAct7jvP2Uy7mHayhf3cfZDRrvWwo0gYmNi&source=gbs_api",
              "thumbnail": "http://books.google.com/books/publisher/content?id=MY3QAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72kwi6tj8uUu7JxBHtv65HK57NJIr1VEHoaXrMR1o_AsyjExj45vHYTYx2zPoKpbwTe6KulCcal1KVhlmjyJZ_cgurWfxH6EcBKBxJ-FMaw9q5nckcdLJGPDyYNREjVYbQ7h3BS&source=gbs_api",
              "small": "http://books.google.com/books/publisher/content?id=MY3QAgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72D-QpLKRaA3CG-S9KE-3RFiE-NyxelYTFBc0luQJeiVB487KmoicEsr0_LtHQF2PIB3x7YmbCjuU7I0BYgiRYrcKJHRWZASAcXeQMV2vP59ItBVojttiJzQN1CA0dXp0baOzhY&source=gbs_api",
              "medium": "http://books.google.com/books/publisher/content?id=MY3QAgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71pyzUQyani1CO-qzcE2oDAvTVD3XM7KpTVXyFv1UX53BJKHz6PGoreEF8RiJc3FCF-ocjqwKq_bqr5Lqz9GviBlAy7vpqWvTc0JXS1OEJtdOIY09tu6dQQon2BONpNLVYZAgPi&source=gbs_api",
              "large": "http://books.google.com/books/publisher/content?id=MY3QAgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73ta6d1StVabJIffrWWyPeIFJG93Ht6j7hucXdSrPqwM7IP7fdueVnDKOhdDXbdN6fnwvUvfDKU2vk9BXB7H3lWoQyi50-7C8zM66w7XsX69n0AQQ7N1udv1n1rgSWc5WQQdRX-&source=gbs_api",
              "extraLarge": "http://books.google.com/books/publisher/content?id=MY3QAgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE70D5mkAn1QhVeyXAaXCU5Z7g5HzP7tAcJt0154ER-xWgIL9LLNKUfaV96c10Ts9lhrFctKa8qT26uzfUer3ATYcvt5RVnQmCKZm4wYgOQRM_gLlXsVV49kjb3lr80XXWNspKuJe&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.es/books?id=MY3QAgAAQBAJ&hl=&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=MY3QAgAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=MY3QAgAAQBAJ"
          },
          "layerInfo": {
            "layers": [
              {
                "layerId": "geo",
                "volumeAnnotationsVersion": "16"
              }
            ]
          },
          "saleInfo": {
            "country": "ES",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
              "amount": 10.99,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amount": 10.44,
              "currencyCode": "EUR"
            },
            "buyLink": "https://play.google.com/store/books/details?id=MY3QAgAAQBAJ&rdid=book-MY3QAgAAQBAJ&rdot=1&source=gbs_api",
            "offers": [
              {
                "finskyOfferType": 1,
                "listPrice": {
                  "amountInMicros": 10990000,
                  "currencyCode": "EUR"
                },
                "retailPrice": {
                  "amountInMicros": 10440000,
                  "currencyCode": "EUR"
                },
                "giftable": true
              }
            ]
          },
          "accessInfo": {
            "country": "ES",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
              "isAvailable": true,
              "acsTokenLink": "http://books.google.es/books/download/Japanese_Things-sample-epub.acsm?id=MY3QAgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
              "isAvailable": true,
              "acsTokenLink": "http://books.google.es/books/download/Japanese_Things-sample-pdf.acsm?id=MY3QAgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=MY3QAgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
          }
        }

        )
      );
      return resp;
    }
  ),

  rest.delete(
    "https://justmybooks.herokuapp.com/mybooks:id",
    async (req, res, ctx) => {
      const resp = res(ctx.status(200), ctx.json({}));
      return resp;
    }
  ),
];
