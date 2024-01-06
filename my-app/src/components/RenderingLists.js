import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        'book1',
        'book2',
        'book3',
    ]

    const books=[
        {
            title:"title1",
            author:"author1",
            pages:111
        },
        {
            title:"title2",
            author:"author2",
            pages:222
        },
        {
            title:"title3",
            author:"author3",
            pages:333
        }
    ]
  return (
    <div>
        {bookList.map(book => (
            <h2 key={book}>{book}</h2>
        ))}

        <hr />
        {books.map(b => (
            <div key={b.title}>
                <h5>{b.title}</h5>
                <p>{b.author}</p>
                <p>{b.pages}</p>
            </div>
        ))}
        <hr />

        {books.map(data => (
            <Book key={data.title} data={data} />
        ))}
    </div>
  )
}

export default RenderingLists