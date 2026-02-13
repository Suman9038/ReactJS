import React from "react";
import {Link, Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className="flex gap-10 justify-center py-4">
            <Link className="text-xl font-semibold" to='/product/men'>Man's Collection</Link>
            <Link className="text-xl font-semibold" to='/product/women'>Women's Collection</Link>
        </div>
      {/* <h1>Product Page</h1> */}
      <Outlet/>
    </div>
  );
};

export default Product;
