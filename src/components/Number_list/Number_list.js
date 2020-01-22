import React from "react";


const Number_list = ( ) => {

  return ( 
  <section className="col-12 pt-2 ">
  <navlink aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <a className="page-link text-dark" to="/#">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link text-dark" to="/#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link text-dark" to="/#">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link text-dark" to="/#">
          Next
        </a>
      </li>
    </ul>
  </navlink>
</section> );
}
 
export default Number_list;

