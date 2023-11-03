import Head from "next/head";
import Image from "next/image";

import Logo from "public/logo.svg";
import Accent from "public/accent.svg";
import LandingImage from "public/landing-image.svg";
import LandingImageDark from "public/landing-image-dark.svg";
import LandingArrow from "public/arrow-landing.svg";
import skills from "../../data/skills";
import jobs from "../../data/jobs";
import FolderIcon from "public/folder-icon.svg";
import FolderIcon1 from "public/folder-icon-1.svg";
import FolderIcon2 from "public/folder-icon-2.svg";
import FolderIcon3 from "public/folder-icon-3.svg";
import AboutIcon from "public/about-icon.svg";
import AboutIcon2 from "public/about-icon-2.svg";
import AboutIcon3 from "public/about-icon-3.svg";
import ExperienceIcon from "public/experience-icon.svg";
import ExperienceIcon1 from "public/experience-icon-1.svg";
import ExperienceIcon2 from "public/experience-icon-2.svg";
import ExperienceIcon3 from "public/experience-icon-3.svg";
import ContactIcon from "public/contact-icon.svg";
import ContactIcon1 from "public/contact-icon-1.svg";
import ContactIcon2 from "public/contact-icon-2.svg";
import ContactIcon3 from "public/contact-icon-3.svg";
import Carousel from "@/components/carousel";
import MovingSquareCanvas from "@/components/square3d";
import JumpIcon from "@/components/jumpIcon";
import { useState, useEffect, useRef, Ref } from "react";
import LandingButton from "@/components/landingButton";
import JobCard from "@/components/jobCard";
import SkillsBox from "@/components/skillsBox";
import AboutCard from "@/components/aboutCarouselCard";
import aboutCards from "../../data/about_cards";
import ContactForm from "@/components/contactForm";

export default function Home() {
  const [iconsVisible, setIconsVisible] = useState(false);
  const [iconsAnimate, setIconsAnimate] = useState(false);
  const [aboutCarouselPosition, setAboutCarouselPosition] = useState(1);
  const [logger, setLogger] = useState("");
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [menuDisplayed, setMenuDisplayed] = useState(false);
  const targetRefs = useRef<Array<Element | null>>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleAboutCarouselClickRight = (num: number) => {
    let newNum = aboutCarouselPosition + num;
    if (newNum > 4) {
      newNum = 1;
    } else if (newNum < 1) {
      newNum = 4;
    }
    setAboutCarouselPosition(newNum);
  };
  const getAboutCarouselPosition = () => {
    switch (aboutCarouselPosition) {
      case 1:
        return "about-carousel-items";
      case 2:
        return "about-carousel-items about-carousel-position-2";
      case 3:
        return "about-carousel-items about-carousel-position-3";
      case 4:
        return "about-carousel-items about-carousel-position-4";

      default:
        break;
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 610) {
      setIconsVisible(true);
    } else {
      setIconsVisible(false);
    }
    if (scrollY < 600) {
      setIconsAnimate(false);
    } else {
      setIconsAnimate(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function getIconClass() {
    if (iconsVisible) {
      return "icon-container-overlay";
    } else if (iconsAnimate) {
      return "icon-container-overlay";
    }
    return "icon-container";
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Change this threshold value as needed
    };

    const handleIntersection: IntersectionObserverCallback = (
      entries,
      observer
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prevVisible) => ({
            ...prevVisible,
            [entry.target.id]: true,
          }));
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    targetRefs.current.forEach((target) => {
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      targetRefs.current.forEach((target) => {
        if (target) {
          observer.unobserve(target);
        }
      });
    };
  }, []);

  const addTargetRef = (ref: Element | null) => {
    if (ref && !targetRefs.current.includes(ref)) {
      targetRefs.current.push(ref);
    }
  };

  return (
    <>
      <Head>
        <title>Daniel Blanchard - Portfolio</title>
        <meta name="description" content="Daniel Blanchard Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`main ${darkMode ? "dark-mode" : ""}`}>
        <nav className="navbar p-1 font-normal">
          <div className="logo">
            <Image src={Logo} alt="logo" height={50} />
          </div>
          <div className="nav-content">
            <div className={`menu ${menuOpen ? "open" : ""}`}>
              <ul className="navLinks">
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              <div className={`bar ${menuOpen ? "open" : ""}`} />
              <div className={`bar ${menuOpen ? "open" : ""}`} />
              <div className={`bar ${menuOpen ? "open" : ""}`} />
            </div>
            <div className="darkmode-button">
              <Image
                height={20}
                width={18}
                alt="Moon"
                src={
                  darkMode
                    ? "/small-icons/moon-dark.svg"
                    : "/small-icons/moon.svg"
                }
              />
              <input
                className="toggle"
                type="checkbox"
                onClick={toggleDarkMode}
              />
              <Image
                height={20}
                alt="sun"
                width={20}
                src={
                  darkMode
                    ? "/small-icons/sun-dark.svg"
                    : "/small-icons/sun.svg"
                }
              />

              {/* <button onClick={toggleDarkMode}>
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button> */}
            </div>
          </div>

          <a href="#contact">
            <button className="contact-corner-button">Contact</button>
          </a>
        </nav>
        <div className="main-content">
          <div className="w-100 landing-wrapper">
            <div className="landing-image-mobile relative">
              <div className="accent-marks-mobile landing-spacing flex-row items-center ">
                <div className="ml-2 filter-1">
                  <Image src={Accent} height={80} alt="Illustration" />
                </div>
                <div className="ml-2 filter-2">
                  <Image src={Accent} height={80} alt="Illustration" />
                </div>
                <div className="ml-2  filter 3">
                  <Image src={Accent} height={80} alt="Illustration" />
                </div>
                <div className="ml-2">
                  <Image src={Accent} height={80} alt="Illustration" />
                </div>
              </div>
              {darkMode ? (
                <Image
                  src={LandingImageDark}
                  priority={true}
                  placeholder="empty"
                  loading="eager"
                  alt="Illustration"
                  fill={true}
                  className="image"
                />
              ) : (
                <Image
                  src={LandingImage}
                  priority={true}
                  alt="Illustration"
                  loading="eager"
                  placeholder="empty"
                  fill={true}
                  className="image"
                />
              )}
            </div>
            <div className="landing-image">
              {darkMode ? (
                <Image
                  src={LandingImageDark}
                  alt="Illustration"
                  fill={true}
                  className="image"
                />
              ) : (
                <Image
                  src={LandingImage}
                  alt="Illustration"
                  fill={true}
                  className="image"
                />
              )}
            </div>
            <div id="landing" className="landing-page ">
              <div className="landing-banner">
                <div className="accent-marks landing-spacing flex-row items-center ">
                  <div className="filter-1">
                    <Image src={Accent} height={80} alt="Illustration" />
                  </div>
                  <div className="ml-2 filter-2">
                    <Image src={Accent} height={80} alt="Illustration" />
                  </div>
                  <div className="ml-2  filter 3">
                    <Image src={Accent} height={80} alt="Illustration" />
                  </div>
                  <div className="ml-2">
                    <Image src={Accent} height={80} alt="Illustration" />
                  </div>
                </div>
                <div className="flex-col landing-left items-center  ">
                  <div className="landing-spacing landing-left-content">
                    <div className="">
                      <h2>Hello I&apos;m Daniel,</h2>
                      <h1 className="font-xxlarge">
                        Software Engineer,
                        <br /> CS Student, and <br /> Problem Solver
                      </h1>
                    </div>
                    <div className="landing-buttons">
                      <LandingButton />
                      <div className="arrow">
                        <Image
                          src={LandingArrow}
                          alt="s"
                          fill={true}
                          className="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="jump-wrapper">
              <div
                className={`w-100 jump-container ${
                  iconsAnimate ? "jump-container-hide" : ""
                }`}
              >
                <div className="ps-4 w-50">
                  <p>or jump to..</p>
                  <hr></hr>
                  <div className={`${getIconClass()}`}>
                    <div className="ic">
                      <a href="#projects">
                        <JumpIcon
                          icon={FolderIcon}
                          bg_1={FolderIcon1}
                          bg_2={FolderIcon2}
                          bg_3={FolderIcon3}
                          size={20}
                          scale={0.8}
                          showBg_1={true}
                          label={"Projects"}
                          sideBar={!iconsVisible}
                        />
                      </a>
                    </div>
                    <div className="ic">
                      <a href="#about">
                        <JumpIcon
                          icon={AboutIcon}
                          bg_1={null}
                          bg_2={AboutIcon2}
                          bg_3={AboutIcon3}
                          size={20}
                          scale={0.95}
                          showBg_1={false}
                          label={"About"}
                          sideBar={!iconsVisible}
                        />
                      </a>
                    </div>
                    <div className="ic">
                      <a href="#experience">
                        <JumpIcon
                          icon={ExperienceIcon}
                          bg_1={ExperienceIcon1}
                          bg_2={ExperienceIcon2}
                          bg_3={ExperienceIcon3}
                          size={20}
                          scale={1}
                          showBg_1={false}
                          label={"Experience"}
                          sideBar={!iconsVisible}
                        />
                      </a>
                    </div>
                    <div className="ic">
                      <a href="#contact">
                        <JumpIcon
                          icon={ContactIcon}
                          bg_1={ContactIcon1}
                          bg_2={ContactIcon2}
                          bg_3={ContactIcon3}
                          size={20}
                          scale={1}
                          showBg_1={false}
                          label={"Contact"}
                          sideBar={!iconsVisible}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${"icon-container-overlay-fixed"} ${
              !iconsVisible && "icon-hide"
            }`}
          >
            <div className="ic">
              <a href="#projects">
                <JumpIcon
                  icon={FolderIcon}
                  bg_1={FolderIcon1}
                  bg_2={FolderIcon2}
                  bg_3={FolderIcon3}
                  size={20}
                  scale={0.8}
                  showBg_1={true}
                  label={"Projects"}
                  sideBar={!iconsVisible}
                />
              </a>
            </div>
            <div className="ic">
              <a href="#about">
                <JumpIcon
                  icon={AboutIcon}
                  bg_1={null}
                  bg_2={AboutIcon2}
                  bg_3={AboutIcon3}
                  size={20}
                  scale={0.95}
                  showBg_1={false}
                  label={"About"}
                  sideBar={!iconsVisible}
                />
              </a>
            </div>
            <div className="ic">
              <a href="#experience">
                <JumpIcon
                  icon={ExperienceIcon}
                  bg_1={ExperienceIcon1}
                  bg_2={ExperienceIcon2}
                  bg_3={ExperienceIcon3}
                  size={20}
                  scale={1}
                  showBg_1={false}
                  label={"Experience"}
                  sideBar={!iconsVisible}
                />
              </a>
            </div>
            <div className="ic">
              <a href="#contact">
                <JumpIcon
                  icon={ContactIcon}
                  bg_1={ContactIcon1}
                  bg_2={ContactIcon2}
                  bg_3={ContactIcon3}
                  size={20}
                  scale={1}
                  showBg_1={false}
                  label={"Contact"}
                  sideBar={!iconsVisible}
                />
              </a>
            </div>
          </div>
          <div
            className="project-wrapper pr-icons relative section-spacing"
            id="projects"
          >
            <div className="project-accent"></div>
            <div className="carousel-wrapper">
              <div className="carousel-dash">
                <Carousel
                  addTargetRef={addTargetRef}
                  isVisible={isVisible}
                  darkMode={darkMode}
                />
              </div>
            </div>

            <div className="side-col-p">
              <div className="side-col-content-p">
                <h3>Projects</h3>
                <h4 className="left-text">A few of my favorite projects</h4>
                <p className="left-text">Check them out!</p>
              </div>
            </div>
          </div>
          <div className="about-wrapper pt-8 relative" id="about">
            <div className="about-background"></div>
            <div className="about-section left-padding">
              <div className="side-col-content-about">
                <h3>About</h3>
                <div className="flex-col p-2">
                  <h2>
                    Daniel Blanchard
                    <br />
                    Software Engineer
                  </h2>
                  <p>South Jordan, UT</p>

                  <div className="about-carousel-buttons section-spacing">
                    <button
                      onClick={() => {
                        handleAboutCarouselClickRight(-1);
                      }}
                      className="about-carousel-button left"
                    >
                      <img src="/small-icons/arrow-right.svg" />
                    </button>
                    <button
                      onClick={() => {
                        handleAboutCarouselClickRight(1);
                      }}
                      className="about-carousel-button right"
                    >
                      <img src="/small-icons/arrow-right.svg" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                ref={addTargetRef}
                id="about-element"
                className={
                  isVisible["about-element"]
                    ? "content-animation about-carousel front"
                    : "before-animation about-carousel front"
                }
              >
                <div className="about-accent">
                  <img src="/accents/dot-grid-accent.svg" />
                </div>
                <div className={`${getAboutCarouselPosition()}`}>
                  {" "}
                  <AboutCard
                    title={aboutCards.card1.title}
                    paragraph={aboutCards.card1.description}
                    icon={aboutCards.card1.icon}
                    color={aboutCards.card1.color}
                    darkMode={darkMode}
                  />
                  <AboutCard
                    title={aboutCards.card2.title}
                    paragraph={aboutCards.card2.description}
                    icon={aboutCards.card2.icon}
                    color={aboutCards.card2.color}
                    darkMode={darkMode}
                  />
                  <AboutCard
                    title={aboutCards.card3.title}
                    paragraph={aboutCards.card3.description}
                    icon={aboutCards.card3.icon}
                    color={aboutCards.card3.color}
                    darkMode={darkMode}
                  />
                  <AboutCard
                    title={aboutCards.card4.title}
                    paragraph={aboutCards.card4.description}
                    icon={aboutCards.card4.icon}
                    color={aboutCards.card4.color}
                    darkMode={darkMode}
                  />
                </div>
              </div>
              <div className="about-carousel-buttons-mobile">
                <button
                  onClick={() => {
                    handleAboutCarouselClickRight(-1);
                  }}
                  className="about-carousel-button left"
                >
                  <img src="/small-icons/arrow-right.svg" />
                </button>
                <button
                  onClick={() => {
                    handleAboutCarouselClickRight(1);
                  }}
                  className="about-carousel-button right"
                >
                  <img src="/small-icons/arrow-right.svg" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-100 flex-col section-spacing" id="experience">
            <div className="experience-container relative">
              <div className="experience-background"></div>

              <div className="experience-wrapper job-table">
                <div
                  ref={addTargetRef}
                  id="target-element-2"
                  className={
                    isVisible["target-element-2"]
                      ? "content-animation divider mt-small content-center"
                      : "before-animation divider mt-small content-center"
                  }
                >
                  <p>
                    <em>(Click to learn more)</em>
                  </p>
                </div>
                <div className="job-table">
                  <div className="job-container">
                    <div
                      ref={addTargetRef}
                      id="job1"
                      className={
                        isVisible["job1"]
                          ? "job-row content-animation"
                          : "job-row before-animation"
                      }
                    >
                      <JobCard job={jobs.job1} darkMode={darkMode} />
                      <JobCard job={jobs.job2} darkMode={darkMode} />
                      <JobCard job={jobs.job3} darkMode={darkMode} />
                    </div>
                    <div
                      ref={addTargetRef}
                      id="job2"
                      className={
                        isVisible["job2"]
                          ? "job-row content-animation"
                          : "job-row before-animation"
                      }
                    >
                      <JobCard job={jobs.job4} darkMode={darkMode} />
                      <JobCard job={jobs.job5} darkMode={darkMode} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="side-col ">
                <div className="side-col-content">
                  <h3>Experience</h3>
                  <h4>Some of my prior experience</h4>
                  <p>And the skills I have developed along the way</p>
                  <a
                    href="/Daniel_Blanchard_Resume.pdf"
                    target="_blank"
                    className="resume-button flex-row"
                  >
                    <p>View Full Resume</p>
                    <div className="button-arrow">&#x2192;</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-container w-100">
            <div className="skill-accent-container">
              <div className="accent-side-bar">
                <div className="skill-accent">
                  <div className="skill-img">
                    <Image
                      src={"/skills-illustration.svg"}
                      fill={true}
                      alt="sd"
                      className="image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-wrapper">
              <div className="carousel-container">
                <MovingSquareCanvas />
              </div>
              <div className="mobileOnly">
                <div className="skills-dot skills-dots-left">
                  <img src="/accents/dot-grid-accent.svg" />
                </div>
                <div className="skills-dot skills-dots-right">
                  <img src="/accents/dot-grid-accent.svg" />
                </div>
                <div className="skills-dot skills-dots-right-b">
                  <img src="/accents/dot-grid-accent.svg" />
                </div>
                <div className="skills-dot skills-dots-left-b">
                  <img src="/accents/dot-grid-accent.svg" />
                </div>
              </div>

              <div className="skills-grid">
                <div className="skills-wrapper-row">
                  <SkillsBox
                    title="Languages"
                    skills={skills.languages}
                    isTwoCol={false}
                    addTargetRef={addTargetRef}
                    isVisible={isVisible}
                    darkMode={darkMode}
                  />
                </div>
                <div className="skills-wrapper-row">
                  <SkillsBox
                    title="Technologies"
                    skills={skills.technologies}
                    isTwoCol={true}
                    addTargetRef={addTargetRef}
                    isVisible={isVisible}
                    darkMode={darkMode}
                  />
                  <SkillsBox
                    title="Other"
                    skills={skills.other}
                    isTwoCol={false}
                    addTargetRef={addTargetRef}
                    isVisible={isVisible}
                    darkMode={darkMode}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-100 section-spacing  relative " id="contact">
            <div className="ml-2 mb-2">
              <h3>Contact</h3>
            </div>
            <div className="contact-page-accent"></div>

            <div
              ref={addTargetRef}
              id="contact-element"
              className={`contact-wrapper flex-col items-center content-center 
              ${
                isVisible["contact-element"]
                  ? "content-animation"
                  : "before-animation"
              }`}
            >
              <div
                className={`contact-display ${
                  darkMode ? "dark-mode-card-bg " : "light-mode-card-bg "
                }`}
              >
                <div className="contact-card-wrapper">
                  <div className="contact-card  ">
                    <div className="contact-card-extra">
                      <div className="contact-content space-between">
                        <div className="contact-content-words">
                          <h2>Hire Me!</h2>
                          <p className="mt-small font-small">
                            Feel free to to contact me any time, through any
                            method below or fill out the form
                          </p>

                          <div className="flex-row mt-1">
                            <Image
                              src={"../small-icons/phone-icon.svg"}
                              height={20}
                              width={20}
                              alt="icon"
                            />
                            <p>801-232-3445</p>
                          </div>
                          <div className="flex-row mt-1">
                            <Image
                              src={"../small-icons/email-icon.svg"}
                              height={20}
                              width={20}
                              alt="icon"
                            />
                            <p>daniel.s.blanchard97@gmail.com</p>
                          </div>
                        </div>

                        <div className="flex-row card-icons">
                          <a
                            href="https://www.github.com/dannyboi1313"
                            target="_blank"
                          >
                            <Image
                              src={"../small-icons/git-icon.svg"}
                              height={40}
                              width={40}
                              alt="icon"
                            />
                          </a>
                          <a
                            href="https://www.linkedin.com/in/danielblanchard97/"
                            target="_blank"
                          >
                            <Image
                              src={"../small-icons/linked-icon.svg"}
                              height={40}
                              width={40}
                              alt="icon"
                            />
                          </a>
                        </div>
                        <div className="contact-accent"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-form-wrapper">
                  <div className="contact-form-container">
                    <ContactForm darkMode={darkMode} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-spacing">
            <p></p>
          </div>
        </div>
      </main>
    </>
  );
}
