const React = require('react')
const Def = require('../default')

function show(data) {
    return (
      <Def>
          <main className="container">
            <div className="row justify-content-center info">
              <div className="col-sm-3">
              <img src={data.place.pic} alt={data.place.name}></img>
              </div>

              <div className="col-sm-3">
              <h1>{ data.place.name }</h1>
      
              <h2>Rating</h2>
              Not Rated

              <h2>Description</h2>
              Located in {data.place.city}, {data.place.state}
              <br></br>   

              <div className="row justify-content-center info">    

                <a href={`/places/${data.id}/edit`} className="btn btn-warning col-sm-3"> 
                  Edit
                </a>  
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger col-sm-3">
                    Delete
                  </button>
                </form> 
                
              </div>
              </div>    

            </div>
            <hr></hr>
            <div className="row justify-content-center comment">
              <h2>Comments</h2>
              No comments yet!
            </div>
          </main>
      </Def>
    )
  }     

module.exports = show