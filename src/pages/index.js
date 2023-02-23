import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";

import { ActionCallArrowRight, ActionCall } from "../components/buttons";
import Slider from "react-slick";

import ebayIcon from "@/assets/icons/ebay.svg";
import appleIcon from "@/assets/icons/apple.svg";
import googleIcon from "@/assets/icons/google.svg";
import ibmIcon from "@/assets/icons/ibm.svg";
import evositeIcon from "@/assets/icons/evosite.svg";
import aconexIcon from "@/assets/icons/aconex.svg";
import brainstorm from "@/assets/vectors/illustrations/brainstorm.svg";
import learn from "@/assets/vectors/illustrations/learn.svg";
import define from "@/assets/vectors/illustrations/define.svg";
import establish from "@/assets/vectors/illustrations/establish.svg";
import deliver from "@/assets/vectors/illustrations/deliver.svg";
import one from "@/assets/icons/one.svg";
import two from "@/assets/icons/two.svg";
import three from "@/assets/icons/three.svg";
import four from "@/assets/icons/four.svg";
import find from "@/assets/icons/find.svg";
import elevate from "@/assets/vectors/illustrations/elevate.svg";
import automate from "@/assets/icons/automate.svg";
import workspace from "@/assets/vectors/illustrations/workspace.svg";
import testimonials from "@/assets/icons/testimonials.svg";
import testimonialsIll from "@/assets/vectors/illustrations/testimonials.svg";

import Marquee from "react-fast-marquee";

import test1 from "@/assets/vectors/illustrations/test1.svg";
import test2 from "@/assets/vectors/illustrations/test2.svg";
import test3 from "@/assets/vectors/illustrations/test3.svg";
import test4 from "@/assets/vectors/illustrations/test4.svg";
import test5 from "@/assets/vectors/illustrations/test5.svg";

import facesDesktop from "@/assets/vectors/avatars/facesDesktop.svg";
import facesMobile from "@/assets/vectors/avatars/facesMobile.svg";

export default function Home() {
  const [deskTopView, setDesktopView] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const viewport = window.screen.width;
    if (viewport <= 1180) {
      setMobileView(true);
    } else {
      setDesktopView(true);
    }
  }, [setDesktopView, setMobileView]);

  const global = {
    deskTopView,
    setDesktopView,
    mobileView,
    setMobileView,
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: deskTopView ? 4 : 3,
    slidesToScroll: deskTopView ? 0 : 1,
  };

  const settings2 = {
    className: "testimonials",
    dots: true,
    infinite: false,
    slidesToShow: deskTopView ? 5 : 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout global={global}>
        <section className="section-trusted-orgs">
          <div className="org-top">
            <p>Trusted by different organizations worldwide</p>
          </div>
          <Marquee>
            <div className="org-bottom">
              <div className="org-brand">
                <Image src={ebayIcon} height="38" width="185.75" alt="ebay" />
              </div>
              <div className="org-brand" id="apple">
                <Image src={appleIcon} height="50" width="41" alt="apple" />
              </div>
              <div className="org-brand" id="google">
                <Image src={googleIcon} height="38" width="152" alt="google" />
              </div>
              <div className="org-brand">
                <Image src={ibmIcon} height="30" width="75" alt="ibm" />
              </div>
              <div className="org-brand">
                <Image src={evositeIcon} height="50" width="138" alt="evosite"/>
              </div>
              <div className="org-brand">
                <Image src={aconexIcon} height="25" width="136" alt="aconex" />
              </div>
            </div>
          </Marquee>
        </section>
        <section className="section-master-accelerate">
          <div className="text-box">
            <div className="text-top">
              <h2>
                <strong className="text-blue">Master</strong> and{" "}
                <strong className="text-blue">accelerate</strong>
              </h2>
              <h2>the design process together</h2>
            </div>
            <div className="text-bottom">
              <p>
                Get access to scientifically proven UX design methods <br /> and
                template libraries to maximize your productivity.
              </p>
              <p>
                Complete your project in record time with your team using a
                seamless <br />
                dashboard for planning and workflow – friendly for professionals
                at all stages!
              </p>
            </div>
          </div>
          <div className="vector-box">
            <Image src={brainstorm} height="405" width="430" alt="brainstorm" />
          </div>
        </section>
        <section className="section-steps">
          <div className="text-header">
            <p>
              Accelerate your UX design process with hundreds <br />
              of <strong>step-by-step method guides</strong>
              and <strong>done-for-you templates:</strong>
            </p>
          </div>
          <div className="step-box-wrapper">
            <Slider {...settings}>
              <div className="step-card">
                <div className="step-ill">
                  <Image src={learn} height="120" width="120" alt="learn" />
                </div>
                <div className="step-heading">
                  <span>
                    <Image src={one} height="20" width="20" alt="one" />
                  </span>
                  <span>
                    <strong>Learn</strong>
                  </span>
                </div>
                <div className="step-text">
                  <p>
                    Gain deeper insights into user <br /> and customer needs
                  </p>
                </div>
              </div>
              <div className="step-card border-blue">
                <div className="step-ill">
                  <Image src={define} height="120" width="120" alt="define" />
                </div>
                <div className="step-heading">
                  <span>
                    <Image src={two} height="20" width="20" alt="two" />
                  </span>
                  <span>
                    <strong>Define</strong>
                  </span>
                </div>
                <div className="step-text">
                  <p>
                    Transfer insights into actions <br /> and clear project
                    plans
                  </p>
                </div>
              </div>
              <div className="step-card">
                <div className="step-ill">
                  <Image
                    src={establish}
                    height="120"
                    width="120"
                    alt="establish"
                  />
                </div>
                <div className="step-heading">
                  <span>
                    <Image src={three} height="20" width="20" alt="three" />
                  </span>
                  <span>
                    <strong>Establish</strong>
                  </span>
                </div>
                <div className="step-text">
                  <p>
                    Build concepts and prototypes <br /> stakeholders love
                  </p>
                </div>
              </div>
              <div className="step-card border-blue">
                <div className="step-ill">
                  <Image src={deliver} height="120" width="120" alt="deliver" />
                </div>
                <div className="step-heading">
                  <span>
                    <Image src={four} height="20" width="20" alt="four" />
                  </span>
                  <span>
                    <strong>Deliver</strong>
                  </span>
                </div>
                <div className="step-text">
                  <p>
                    Bring it together to deliver <br /> great project outcomes
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section className="section-elevate">
          <div className="elevate-action">
            <div className="heading">
              <Image src={find} height="50" width="50" alt="find" />
              <br />
              <h1>
                Elevate your <br /> design knowledge
              </h1>
            </div>
            <div className="subheading">
              <p>
                Hundreds of UX, CX and Service Design <br /> methods at your
                fingertips
              </p>
            </div>
            <div className="text">
              <p>
                Say goodbye to old, lifeless methods. Say hello to <br />{" "}
                scientifically{" "}
                <strong>
                  tested UX, SD and CX guides proven to <br />
                  work.
                </strong>{" "}
                Over 350+ guides, with more added each week.
              </p>
              <ActionCallArrowRight text={"View Methods"} route={"/methods"} />
            </div>
          </div>
          <div className="elevate-ill">
            <Image src={elevate} height="600" width="740" alt="elevate" />
          </div>
        </section>
        <section className="section-workspace">
          <div className="workspace-ill">
            <Image src={workspace} height="900" width="700" alt="workspace" />
          </div>
          <div className="workspace-action">
            <div className="heading">
              <Image src={automate} height="75" width="75" alt="find" />
              <br />
              <h1>
                Your workspace. <br /> Simple and <br /> streamlined
              </h1>
            </div>
            <div className="subheading">
              <p>
                Share all your favourite resources. <br />
                Easy, seamless, secure.
              </p>
            </div>
            <div className="text">
              <p>
                Make collections of your favourite methods and <br />
                templates and share them with your team, <br />
                all from the one place.
              </p>
            </div>
            <ActionCall text={"Start Free Trial"} route={"/free-trial"} />
          </div>
        </section>
        <section className="section-testimonials">
          <div className="hero">
            <div className="heading">
              <Image src={testimonials} height="24" width="111" alt="find" />
              <br />
              <h1>
                What world-class <br /> designers have to say
              </h1>
            </div>
            <div className="text">
              <p>
                Whether you're a junior designer or the head of a design
                department, you're in good <br />
                company. Method Loop is used and loved by over 20% of Fortune
                500 designers!
              </p>
            </div>
          </div>
          <Slider {...settings2}>
            <div className="testimonial">
              <Image src={test1} height="305" width="340" alt="testimonial" />
            </div>
            <div className="testimonial">
              <Image src={test2} height="305" width="340" alt="testimonial" />
            </div>
            <div className="testimonial">
              <Image src={test3} height="305" width="340" alt="testimonial" />
            </div>
            <div className="testimonial">
              <Image src={test4} height="305" width="340" alt="testimonial" />
            </div>
            <div className="testimonial">
              <Image src={test5} height="305" width="340" alt="testimonial" />
            </div>
          </Slider>
        </section>
        <section className="section-sign-up">
          <div className="hero">
            <div className="header">
              <h1>
                Become a <strong>Method Loop</strong>
                <br /> Member Today
              </h1>
            </div>
            <div className="text">
              <p>
                Register now and get access to remarkable methods, mini-guides
                and templates. <br /> And the best part? It's FREE.
                Alternatively, see <strong>PRO</strong> and{" "}
                <strong>DIRECTOR</strong> plans.
              </p>
            </div>
            <div className="action">
              <span>
                <ActionCall text={"Start Free Trial"} route={"/free-trial"} />
              </span>
              <span>
                <ActionCall
                  text={"More Info"}
                  route={"/info"}
                  className="more-info"
                />
              </span>
            </div>
          </div>
          <div className="sign-up-ills">
            <Image
              src={global.deskTopView ? facesDesktop : facesMobile}
              alt="avatar"
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
