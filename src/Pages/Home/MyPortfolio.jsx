import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">My Gallery</h2>
        </div>
        <div>
          
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" height={100} width={50} />
            </div>
           
            
          </div>
        ))}
        
      </div>
      <div className="portfolio--section--container">
        {data?.gallery?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" height={100} width={50} />
            </div>
            
            
          </div>
        ))}
        
      </div>
    </section>
  );
}
