import "../styles/home.css";
import editorDesktopImg from "../assets/images/illustration-editor-desktop.svg";
import phonesImg from "../assets/images/illustration-phones.svg";
import laptopDesktopImg from "../assets/images/illustration-laptop-desktop.svg";

export default function Home() {
  return (
    <>
      {/* Section 1: Designed for the future */}
      <section className="section future-section">
        <h2 className="section-title">Designed for the future</h2>
        
        <div className="section-content reverse-wrap">
          <div className="image-content">
            <img src={editorDesktopImg} alt="Editor interface illustration" />
          </div>
          <div className="text-content">
            <div className="feature">
              <h3>Introducing an extensible editor</h3>
              <p>
                Blogr features an exceedingly intuitive interface which lets you focus 
                on one thing: creating content. The editor supports management of 
                multiple blogs and allows easy manipulation of embeds such as images, 
                videos, and Markdown. Extensibility with plugins and themes provide 
                easy ways to add functionality or change the looks of a blog.
              </p>
            </div>
            
            <div className="feature">
              <h3>Robust content management</h3>
              <p>
                Flexible content management enables users to easily move through 
                posts. Increase the usability of your blog by adding customized 
                categories, sections, format, or flow. With this functionality, 
                you're in full control.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Section 2: State of the Art Infrastructure */}
      <section className="section infrastructure-section">
        <div className="section-content">
          <div className="image-content phones-image">
            <img src={phonesImg} alt="Mobile phone interface" />
          </div>
          
          <div className="text-content">
            <h2>State of the Art Infrastructure</h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide the 
              backbone for ultra-fast connectivity. This ensures your site will load 
              instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Free, open, simple */}
      <section className="section features-section">
        <div className="section-content">
          <div className="image-content">
            <img src={laptopDesktopImg} alt="Laptop interface illustration" />
          </div>
          
          <div className="text-content">
            <div className="feature">
              <h3>Free, open, simple</h3>
              <p>
                Blogr is a free and open source application backed by a large 
                community of helpful developers. It supports features such as code 
                syntax highlighting, RSS feeds, social media integration, third-party 
                commenting tools, and works seamlessly with Google Analytics. The 
                architecture is clean and is relatively easy to learn.
              </p>
            </div>
            
            <div className="feature">
              <h3>Powerful tooling</h3>
              <p>
                Batteries included. We built a simple and straightforward CLI tool 
                that makes customization and deployment a breeze, but capable of 
                producing even the most complicated sites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
