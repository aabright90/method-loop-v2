import React from "react";
import NavigationBar from "./NavigationBar";
import Image from "next/image";

const Header = ({ heroOn = false, global }) => {
  return (
    <>
      {heroOn && (
        <>
          <section className="hero-section">
            <NavigationBar global={global} />
            <div className="hero-wrapper">
              <div className="hero-left">
                <div className="hero-left-wrapper">
                  <div className="hero-grabber">
                    <h1>Every Design</h1>
                    <h1> Method.</h1>
                    <h1> Ever Made.</h1>
                  </div>
                  <div className="hero-text">
                    <p>
                      Create a playbook that informs your design process and{" "}
                      <br /> keeps you and your team on-point. MethodLoop®
                      brings <br /> all your design processes into a single
                      platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero-right">
                {global.deskTopView && (
                  <Image
                    src={"/img/group.png"}
                    alt="image"
                    width="600"
                    height="450"
                  />
                )}
                {global.mobileView && (
                  <Image
                    src={"/img/meetingMobile.png"}
                    alt="image"
                    width="600"
                    height="450"
                  />
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Header;
