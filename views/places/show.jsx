const React = require('react')
const Def = require('../default')


function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive"> 
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 🤬' : 'Rave! 🤩'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {rating}</h4>
        </div>
      )
    })
  }
    return (
      <Def>
          <main className="container">
            <div className="row justify-content-center info">
              <div className="col-sm-3">
              <img src={data.place.pic} alt={data.place.name}></img>
                <h3> Located in {data.place.city}, {data.place.state}</h3>
              </div>

              <div className="col-sm-3">
              <h1>{ data.place.name }</h1>

              <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4> Serving {data.place.cuisines} </h4>
              <br></br>   

              <div className="row justify-content-center info">    

                <a href={`/places/${data.place._id}/edit`} className="btn btn-warning col-sm-3"> 
                  Edit
                </a>  
                <form method="POST" action={`/places/${data.place._id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger col-sm-3">
                    Delete
                  </button>
                </form> 
                
                <form method="POST" action={`/places/${data.place._id}/comment?_method=PUT`}>
                <div className='row container'>
                  <div className="form-group col-sm-6">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" id="autor" name="autor" required />
                  </div>
                  <div className="form-group col-sm-6">
                    <label htmlFor="content">Comment</label>
                    <input className="form-control" id="content" name="content"/>
                  </div>
                  <div className="form-group col-sm-6">
                    <label htmlFor="stars">Rating</label>
                    <input className="form-control" id="stars" name="stars" />
                  </div>
                  <div className="form-group col-sm-6">
                    <label htmlFor="rant">Rant? </label>
                    <input className="form-control rants" type = "checkbox" id="rant" name="rant" value = "true" />
                  </div>
                  <div>
                  <input className="btn btn-primary button" type="submit" value="Submit"/>
                  </div>
                </div>
              </form>
                
              </div>
              </div>    

            </div>
            <hr></hr>
            <div className="row justify-content-center comment">
              <h2>Comments</h2>
              {comments}
            </div>
          </main>
      </Def>
    )
  }     

module.exports = show