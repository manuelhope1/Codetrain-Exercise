import img1 from './images/pizza4.avif';
import img2 from './images/pizza5.avif'; 
import img3 from './images/pizza6.avif';
import img4 from './images/pizza7.avif'; 

function  Typess() {
    return(
        <div className="container Pizza-types">
    <div className="row">
      <h3 className="text-center">Pizza Types</h3>
      <div className="col-md-3">
        <div className="thumbnail">
      <img src={img1} alt="Pepperoni"/>
      <div className="caption">
        <h3>Pepperoni Pizza</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
      </div>
    </div>
      </div> 
      <div className="col-md-3">
        <div className="thumbnail">
      <img src={img2} alt="..."/>
      <div className="caption">
        <h3>Veggies Pizza</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
      </div>
    </div>
      </div> 
      <div className="col-md-3">
        <div className="thumbnail">
      <img src={img3} alt="..."/>
      <div className="caption">
        <h3>Queen Pizza</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
      </div>
    </div>
      </div> 
      <div className="col-md-3">
        <div className="thumbnail">
      <img src={img4} alt="..."/>
      <div className="caption">
        <h3>King Pizza</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
      </div>
    </div>
    
  </div>

    );
};

export default Typess;