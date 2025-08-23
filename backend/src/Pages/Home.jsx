import { Analytics } from "../components/Analytics";

 export const Home = () => {
    return  (
        <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>We are the World Best IT Company</p>
                        <h1>Wlcome to the Thapa technical</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Adipisci iusto veritatis perspiciatis numquam 
                            necessitatibus iure nobis, veniam vitae accusamus fuga.
                        </p>
                        <div className="btn btn-group">
                            <a href="Connect">
                                <button className="btn"> connect now</button>
                                </a>
                             <a href="service">
                               <button className="btn secondary-btn">Learn more</button>
                             </a>
                        </div>
                    </div>
                    {/* hero image */}
                    <div className="hero-image">
                        <img src="/image/home-img.png"
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

        {/* 3rd section  */}

          <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                     <div className="hero-image">
                        <img src="/image/home2-img-removebg-preview.png"
                         alt="coding together"
                         width="500"
                         height="500"
                          />
                    </div>

                    <div className="hero-content">
                         
                        <p>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ipsam modi omnis similique, sunt facere cum esse id rem debitis
                         ipsum dolore dolorem odio tempore itaque quae, quidem ex sint vel. 
                        </p>
                        <div className="btn btn-group">
                            <a href="Connect">
                                <button className="btn"> connect now</button>
                                </a>
                             <a href="service">
                               <button className="btn secondary-btn">Learn more</button>
                             </a>
                        </div>
                    </div>
                    {/* hero image */}
                   
                </div>
            </section>
        </main>


        </>
    )

    
}; 