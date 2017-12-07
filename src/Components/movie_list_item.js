import React from "react";

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      showReview: false
    }

    this.renderShowButton = this.renderShowButton.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.renderReviewButton = this.renderReviewButton.bind(this);
  }

  renderShowButton() {
    if(this.props.movie.synopsis.length > 655){
      if(this.state.expanded){
        return(
          <button onClick={ () => this.setState({expanded: false}) }>
            Show Less
          </button>
        )
      } else {
        return(
          <button onClick={ () => this.setState({expanded: true}) }>
            Read More
          </button>
        )
      }
    } else {
      return null;
    }
  }

  renderReviewButton() {
    if(this.state.showReview) {
      return(
        <button onClick={ () => this.setState({showReview: false}) }>
          Hide Reviews
        </button>
      )
    } else {
      return(
        <button onClick={ () => this.setState({showReview: true}) }>
          Read Reviews
        </button>
      )
    }
  }


  renderReviews() {
    if(this.state.showReview){
      return(
        <label>Reviews:
          <p className="reviews">
            { this.props.review.review }
          </p>
        </label>

      )
    } else {
      return null;
    }
  }


  render() {
    const { title, year, synopsis, url, id, director, rating } = this.props.movie;
    let synopsisView;

    if(synopsis.length < 655 || this.state.expanded === false){
      synopsisView = "collapse-view";
    } else {
      synopsisView = "expanded-view";
    }

    return (
      <div className="movie-item">
        <img src={ this.props.movie["cover-url"] } />
        <section>
          <header>
            <div>{ id + `.` }</div>
            <a className="title" href={ url }>{ title }</a>
            <div className="year">{ `(` + year + `)` }</div>
          </header>
          <p className={ synopsisView }>{ synopsis }</p>
          { this.renderShowButton() }
          <section className="movie-info">
            <div>Runtime: { this.props.movie["runtime-in-minutes"]} Mins.</div>
            <div>Director: { director }</div>
            <div>Rating: { rating.slice(0,2).toUpperCase() + rating.slice(2) }</div>
          </section>
          <div>
            { this.renderReviewButton() }
          </div>
          <div>
            { this.renderReviews() }
          </div>
        </section>
      </div>
    );
  }
}

export default MovieListItem;
