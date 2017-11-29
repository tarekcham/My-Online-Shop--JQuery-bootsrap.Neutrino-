import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbar from './templates/navbar.html';
import carousel from './templates/carousel.html';

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
    <div class="clearfix hidden-sm-up"></div>
    <div class="col-lg-4 col-md-6 col-sm-12">${mkCard(pictures[2])}</div>
    <div class="col-lg-4 col-md-6 col-sm-12">${mkCard(pictures[3])}</div>
    <div class="col-lg-4 col-md-6 col-sm-12">${mkCard(pictures[4])}</div>
    <div class="col-lg-4 col-md-6 col-sm-12">${mkCard(pictures[5])}</div>
  </div>
</div>
`;

const catCards = `
<div class="container">
  <div class="row">
    <div class="col-lg-3 col-md-6 col-sm-12">

      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src="./static/cat1.jpg" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
     </div>
    </div>
    </div>

    <div class="col-lg-3 col-md-6 col-sm-12">

      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src="./static/cat2.jpg" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
     </div>
    </div>
    </div>

    <div class="col-lg-3 col-md-6 col-sm-12">

      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src="./static/cat3.jpg" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
     </div>
    </div>
    </div>

    <div class="col-lg-3 col-md-6 col-sm-12">

      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src="./static/cat4.jpg" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
     </div>
    </div>
    </div>

  </div>
</div>
`;

$(() => {
  $('#root').append(navbar).append(grids).append(carousel)
    .append(catCards);
});
