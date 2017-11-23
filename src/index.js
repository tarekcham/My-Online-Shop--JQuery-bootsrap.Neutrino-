import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbar from './templates/navbar.html';

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

const carousel = `
 <div  class="carousel-backColor" >
   <div id="demo" class="carousel slide" data-ride="carousel">

      <!-- Indicators -->
      <ul class="carousel-indicators" >
        <li  data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
        <li data-target="#demo" data-slide-to="3"></li>
      </ul>

      <!-- The slideshow -->
      <div class="carousel-inner">
        <div class="carousel-item active">


            <div class='container'>

              <div class=row>
                <div class= "col-lg-6">
                  <h1> Slide 1 </h1>
                  <p>  חתול הבית (שם מדעי: Felis silvestris catus) הוא יונק טורף מבוית,
                    מהסוג חתול ממשפחת החתוליים. החתול נפוץ בכל יבשות העולם מלבד באנטארקטיקה.
                    משערים כי מוצאו מחתול הבר. החתול הוא טורף לילי הצד מכרסמים, ציפורים ודגים.
                    נכון ל-2009, החתול הוא חיית המחמד הנפוצה ביותר בעולם,
                    ומספר החתולים הביתיים נאמד בכ-600 מיליון. 
                    החתול חי בדרך כלל בבדידות, למעט אינטראקציה מזדמנת עם בני מינו.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class= "col-lg-6">
                  <img  class="carouselImag" src="./static/cat1.jpg" alt="Los Angeles">
                </div>
                
              </div>
            </div>
        </div>


        <div class="carousel-item">
          <div class='container'>

              <div class=row>
                
                <div class= "col-lg-6">
                  <img  class="carouselImag" src="./static/cat2.jpg" alt="Los Angeles">
                </div>
                <div class= "col-lg-6">
                  <h1> Slide 1 </h1>
                  <p>  חתול הבית (שם מדעי: Felis silvestris catus) הוא יונק טורף מבוית,
                    מהסוג חתול ממשפחת החתוליים. החתול נפוץ בכל יבשות העולם מלבד באנטארקטיקה.
                    משערים כי מוצאו מחתול הבר. החתול הוא טורף לילי הצד מכרסמים, ציפורים ודגים.
                    נכון ל-2009, החתול הוא חיית המחמד הנפוצה ביותר בעולם,
                    ומספר החתולים הביתיים נאמד בכ-600 מיליון. 
                    החתול חי בדרך כלל בבדידות, למעט אינטראקציה מזדמנת עם בני מינו.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                
              </div>
            </div>
        
        </div>
        <div class="carousel-item">
          <div class='container'>

              <div class=row>
                <div class= "col-lg-6">
                  <h1> Slide 1 </h1>
                  <p>  חתול הבית (שם מדעי: Felis silvestris catus) הוא יונק טורף מבוית,
                    מהסוג חתול ממשפחת החתוליים. החתול נפוץ בכל יבשות העולם מלבד באנטארקטיקה.
                    משערים כי מוצאו מחתול הבר. החתול הוא טורף לילי הצד מכרסמים, ציפורים ודגים.
                    נכון ל-2009, החתול הוא חיית המחמד הנפוצה ביותר בעולם,
                    ומספר החתולים הביתיים נאמד בכ-600 מיליון. 
                    החתול חי בדרך כלל בבדידות, למעט אינטראקציה מזדמנת עם בני מינו.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class= "col-lg-6">
                  <img  class="carouselImag" src="./static/cat3.jpg" alt="Los Angeles">
                </div>
                
              </div>
            </div>
        
        </div>
      
      <div class="carousel-item">
          <div class='container'>

              <div class=row>
                
                <div class= "col-lg-6">
                  <img  class="carouselImag" src="./static/cat4.jpg" alt="Los Angeles">
                </div>
                <div class= "col-lg-6">
                  <h1> Slide 1 </h1>
                  <p>  חתול הבית (שם מדעי: Felis silvestris catus) הוא יונק טורף מבוית,
                    מהסוג חתול ממשפחת החתוליים. החתול נפוץ בכל יבשות העולם מלבד באנטארקטיקה.
                    משערים כי מוצאו מחתול הבר. החתול הוא טורף לילי הצד מכרסמים, ציפורים ודגים.
                    נכון ל-2009, החתול הוא חיית המחמד הנפוצה ביותר בעולם,
                    ומספר החתולים הביתיים נאמד בכ-600 מיליון. 
                    החתול חי בדרך כלל בבדידות, למעט אינטראקציה מזדמנת עם בני מינו.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                
              </div>
            </div>
        
        </div>
      </div>

      <!-- Left and right controls -->
      <a  class="carousel-control-prev" href="#demo" data-slide="prev">
        <span  class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>

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
