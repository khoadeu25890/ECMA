import { getAll } from '../api/product'; 

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const newArrival = {
    async render(){
      const {data} = await getAll()
        return /*html */ `
        <div class="my-28">
          <div class="text-center mb-12">
            <h1 class="font-semibold text-2xl">NEW ARRIVAL </h1>
          </div> 
          <div class="flex justify-center px-3">
      ${data.map((product)=>/*html */`
           <div class="product" data-aos="fade-up">
            <div class="item">
              <a href="/#/products/${product.id}"><img
                  src="${product.img}"
                  alt="" width="280" height="370"></a>
            </div>
            <div class="overlay">
              <div class="title-price text-black">
                <a href="/#/products/${product.id}" class="text-xl">${product.name}</a><br>
                <span class="py-3 text-xl text-red-600 ">${product.price}</span><br>
              </div>
          </div>
         
        </div>
        ` ).join("")}
      </div> 
            

      </div>`
    },
};
export default newArrival;