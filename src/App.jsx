import { useState } from "react";
import { media, process, projects } from "./data";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Reveal from "./components/Reveal";
import Image from "./components/Image";
import Arrow from "./components/Arrow";
import ProjectCard from "./components/ProjectCard";
import Dialog from "./components/Dialog";
import BriefForm from "./components/BriefForm";

export default function App() {
  const [project, setProject] = useState(null);
  const [briefOpen, setBriefOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navigation onBrief={() => setBriefOpen(true)} />

      <main id="main">
        <Hero />

        <section
          className="intro section-shell"
          aria-labelledby="intro-title"
        >
          <Reveal className="intro-label">
            <p className="eyebrow">
              <span className="small-dot" />
              The FORM philosophy
            </p>
            <span className="section-index">
              01 / A sense of belonging
            </span>
          </Reveal>

          <Reveal className="intro-body">
            <h2 id="intro-title">
              A home should feel<br />
              as good as it <em>looks.</em>
            </h2>

            <div className="intro-copy">
              <p>
                We create homes that bring you closer to what matters.
                To nature. To each other. To the simple pleasure of
                being somewhere that feels entirely your own.
              </p>

              <p>
                Through thoughtful architecture and an honest use of
                materials, we make spaces that settle beautifully into
                their surroundings—and into your life.
              </p>
            </div>

            <a href="#studio" className="text-link">
              Meet the studio <Arrow diagonal />
            </a>
          </Reveal>
        </section>

        <section
          id="residences"
          className="residences section-shell"
          aria-labelledby="residences-title"
        >
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">
                An ongoing exploration of home
              </p>

              <h2 id="residences-title">
                Selected <em>residences.</em>
              </h2>
            </div>

            <span className="section-index">
              02 / Selected work
            </span>
          </Reveal>

          <div className="project-grid">
            {projects.map((item, index) => (
              <ProjectCard
                key={item.id}
                project={item}
                onOpen={setProject}
                className={index === 0 ? "project-featured" : ""}
              />
            ))}
          </div>

          <p className="project-disclaimer">
            Concept portfolio · Project names and descriptions are illustrative.
          </p>
        </section>

        <section
          id="studio"
          className="studio"
          aria-labelledby="studio-title"
        >
          <div className="studio-image">
            <Image
              src={media.studio}
              alt="Inviting interior with warm timber and soft natural light"
            />
            <span className="image-caption">
              A study in warmth & restraint
            </span>
          </div>

          <Reveal className="studio-copy">
            <p className="eyebrow">03 / The studio</p>

            <h2 id="studio-title">
              Less noise.<br />
              More <em>meaning.</em>
            </h2>

            <p>
              FORM is an independent architecture studio with a simple
              belief: the best spaces make life feel more natural.
            </p>

            <p>
              Our work sits at the intersection of architecture,
              interiors, and landscape. We look for the quiet potential
              of every place, shaping homes that are personal,
              purposeful, and deeply connected to their setting.
            </p>

            <div className="studio-signature">
              Thoughtfully made. Slowly lived.
            </div>

            <a href="#approach" className="text-link">
              How we work <Arrow diagonal />
            </a>
          </Reveal>
        </section>

        <section
          id="approach"
          className="approach section-shell"
          aria-labelledby="approach-title"
        >
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">04 / A considered process</p>

              <h2 id="approach-title">
                Together, from<br />
                the <em>very beginning.</em>
              </h2>
            </div>

            <p className="heading-note">
              Good architecture begins with a good relationship.
              An open conversation, from first thought to final detail.
            </p>
          </Reveal>

          <div className="process-grid">
            {process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="process-card">
                  <span className="process-number">
                    0{index + 1}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="manifesto"
          aria-label="Our design philosophy"
        >
          <Image
            src={media.detail}
            alt="Quiet interior with tactile materials and considered furnishings"
          />

          <div className="manifesto-shade" />

          <Reveal className="manifesto-content">
            <p className="eyebrow">
              Built around what matters
            </p>

            <p className="manifesto-quote">
              “Not just a place to live.<br />
              A way to <em>feel.</em>”
            </p>

            <span>
              Light / Material / Landscape / Life
            </span>
          </Reveal>
        </section>

        <section
          id="contact"
          className="contact section-shell"
          aria-labelledby="contact-title"
        >
          <Reveal>
            <p className="eyebrow">
              The next chapter starts here
            </p>

            <h2 id="contact-title">
              Let’s make<br />
              room for <em>you.</em>
            </h2>

            <div className="contact-bottom">
              <p>
                A new home. A fresh perspective.<br />
                Tell us what you have in mind.
              </p>

              <button
                className="contact-button"
                onClick={() => setBriefOpen(true)}
              >
                Prepare your project brief

                <span className="circle-arrow">
                  <Arrow diagonal />
                </span>
              </button>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer section-shell">
        <div className="footer-top">
          <a className="wordmark" href="#home" aria-label="FORM home">
            FORM<span>®</span>
          </a>

          <p>
            Residential architecture.<br />
            A quieter point of view.
          </p>

          <a className="text-link" href="#home">
            Back to top <Arrow diagonal />
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} FORM. Concept website.
          </span>

          <span>
            Photography: Unsplash · Landscape film: Pexels
          </span>

          <span>Made with intention.</span>
        </div>
      </footer>

      <Dialog
        open={Boolean(project)}
        onClose={() => setProject(null)}
        titleId="project-dialog-title"
        className="project-dialog"
      >
        {project && (
          <>
            <Image
              src={project.image}
              alt={project.alt}
              eager
              className="project-dialog-image"
            />

            <div className="project-dialog-copy">
              <p className="eyebrow">
                {project.category} / {project.year}
              </p>

              <h2 id="project-dialog-title">
                {project.title}
              </h2>

              <p className="project-dialog-location">
                {project.location} · {project.size}
              </p>

              <p>{project.description}</p>

              <p className="project-materials">
                {project.materials}
              </p>

              <p className="project-disclaimer">
                Illustrative concept project. Photography represents the design mood.
              </p>
            </div>
          </>
        )}
      </Dialog>

      <Dialog
        open={briefOpen}
        onClose={() => setBriefOpen(false)}
        titleId="brief-title"
        className="brief-dialog"
      >
        {briefOpen && <BriefForm />}
      </Dialog>
    </>
  );
}
