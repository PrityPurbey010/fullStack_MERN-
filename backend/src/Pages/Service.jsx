
import { useAuth } from "../store/auth";
export const Service = () => {
  const{ services }= useAuth();
return (
    <section className="section-service">
    <div className="container">
        <h1 className="main-heading">Services</h1>
    </div>

    <div className="conainer grid grid-three-cols">
        {
             services.map((curElem, index) => {
        
             const {price, description, provider, service} = curElem;
        
            return(
           <div className="card" key={index}>
                <div className="card-img">
                   <img src="/image/sevices-img.png" alt="our services info" width="400"  />
                 </div>
            <div className="card-detailed">
                <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                </div>
                 <h2>{service}</h2>
                 <p>{description}</p>
            </div>
        </div>
             ) })
         }
            
      
    </div>
    </section>
);
} ;