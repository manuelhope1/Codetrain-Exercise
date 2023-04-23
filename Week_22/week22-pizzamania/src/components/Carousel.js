import img1 from './images/pizza1.avif';
import img2 from './images/pizza2.avif'; 
import img3 from './images/pizza3.avif'; 


function Carousel(){
    return(
        <div className="container-fluid">
	<div className="row">
	<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
  
  <ol className="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <div className="carousel-inner carousel-content" role="listbox">
    <div className="item active">
      <img src={img1} alt="Pizza" width="100%" />
    </div>
    <div className="item">
      <img src={img2} alt="Pizza" width="100%" className='car'/>
    </div>
    <div className="item">
      <img src={img3} alt="Pizza" width="100%" className='car'/>
    </div>
  </div>


  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
	</div>
</div>
    );
}

export default Carousel;