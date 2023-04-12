import React from "react";
import "../styles/Contacts.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contacts = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* leftside */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode  */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>+91 954-2367-821</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call Now
                </div>
              </div>
              {/* second mode  */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span>+91 954-2367-821</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Chat Now
                </div>
              </div>

            </div>
            {/* second row */}
            <div className="flexStart row">
              {/* third mode  */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span>+91 954-2367-821</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call Now
                </div>
              </div>
              {/* fourth mode  */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span>+91 954-2367-821</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Message Now
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* rightside */}
        <div className="c-right">
          <img src="/contact.jpg" alt="" className="image-container" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
