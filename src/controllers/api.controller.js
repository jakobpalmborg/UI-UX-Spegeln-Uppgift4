import { loadMovies } from "../helpers/movies.js";
import { loadAllReviews, loadMovieReviews } from "../helpers/reviews.js";

import { getAllScreenings, movieScreenings, screeningsStartpage } from "../helpers/screenings.js";

import { loadAllRatings, loadMovieRatings } from "../helpers/ratings.js"

const apiCtrl = {};

apiCtrl.movies = async (req, res) => {
  res.json(await loadMovies());
};

apiCtrl.startpageScreenings = async (req, res) => {
  res.json(await screeningsStartpage());
};

apiCtrl.movieScreenings = async (req, res) => {
  res.json(await movieScreenings(req.params.id));
};

apiCtrl.screenings = async (req, res) => {
  res.json(await getAllScreenings());
};

apiCtrl.movieReviews = async (req, res) => {
  res.json(await loadMovieReviews(req.params.id));
};
apiCtrl.reviews = async (req, res) => {
  res.json(await loadAllReviews());
};

apiCtrl.movieRating = async (req, res) => {
  res.json(await loadMovieRatings(req.params.id));
};

apiCtrl.ratings = async (req, res) => {
  res.json(await loadAllRatings());
}

export default apiCtrl;
