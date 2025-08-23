import { Analytics } from "../components/Analytics";
import {NavLink} from "react-router-dom";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();  
return (
    <>
    <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Welcome {user? `${user.username} to our website`
                         : `to our website`}</p>
                        <h1>Why Choose Us?</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            necessitatibus iure nobis, veniam vitae accusamus fuga.
                        </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Eos soluta officiis reprehenderit similique excepturi aut!
                        </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Eos soluta officiis reprehenderit similique excepturi aut!
                        </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Doloremque, non!
                         </p>
                        <div className="btn btn-group">
                            <NavLink to="Connect">
                                <button className="btn"> connect now</button>
                                </NavLink>
                             <NavLink to="service">
                               <button className="btn secondary-btn">Learn more</button>
                             </NavLink>
                        </div>
                    </div>
                    {/* hero image */}
                    <div className="hero-image">
                        <img src="/image/about2-img.png"
                         alt="coding together"
                         width="400"
                         height="400"
                          />
                    </div>
                </div>
            </section>
        </main>

         {/* 2nd section  */}

        <Analytics/>
         </>
);
}