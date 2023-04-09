import { Component } from "react";
class SingleCard extends Component {

constructor(){
  super();
  this.state ={
    isHover: false
  }
}


  render() {
    const { photo, photoBg, title, author, discount,price } =
      this.props.userdata;

    return (
      <div className="col-12 pt-5 col-sm-6 col-md-3 mt-5">
        <div
    
    className="card  card-shop"
          onMouseEnter={() =>
            this.setState({
              isHover: true,
            })
          }
          onMouseLeave={() =>
            this.setState({
              isHover: false,
            })
          }
        >
          {!this.state.isHover ? (
            <img
              style={{
                height: "auto",
                width: "100%",
              }}
              src={photo}
              class="card-img-top"
              alt="..."
            />
          ) : (
            <img
              style={{
                height: "auto",
                width: "100%",
              }}
              src={photoBg}
              class="card-img-top"
              alt="..."
            />
          )}

          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p className="card-text-author">
              <i>by:</i> {author.substring(0, 67)}
            </p>
            <button
              className={`me-2 card-text btn btn-outline-dark ${
                discount ? "text-decoration-line-through" : null
              }`}
            >
              {price}
            </button>

            {discount && (
              <button className=" card-text btn btn-outline-danger">
                {discount}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCard;
