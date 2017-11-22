import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';

const navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Catagory 1 <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Catagory 2</a>
      </li>
  </div>
</nav> `;

const pictures = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg'];

function mkCard(img) {
  return `
<div class="card-group">
  <div class="card">
    <img class="card-img-top" src="static/${img}" alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
 `;
}

const grids = `
<div class="container">
  <div class="row">
    <div class="col-lg-4 col-md-6 col-sm-12">${mkCard(pictures[0])}</div>
    <div class="col-lg-4 col-md-6 col-sm-12">${mkCard(pictures[1])}</div>
    <!-- Add the extra clearfix for only the required viewport -->
    <div class="clearfix hidden-sm-up"></div>
    <div class="col-lg-4 col-md-6 col-sm-12">${mkCard(pictures[2])}</div>
    <div class="col-lg-4 col-md-6 col-sm-12">${mkCard(pictures[3])}</div>
    <div class="col-lg-4 col-md-6 col-sm-12">${mkCard(pictures[4])}</div>
    <div class="col-lg-4 col-md-6 col-sm-12">${mkCard(pictures[5])}</div>
  </div>
</div>
`;

$(() => {
  $('body').append(navbar).append(grids);
});

