import React from 'react'

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
            <h2>{book}</h2>
        ))}

        <hr />

        {books.map(data => (
            <div>
                <h5>{data.title}</h5>
                <p>{data.author}</p>
                <p>{data.pages}</p>
            </div> 
        ))}
    </div>
  )
}

export default RenderingLists