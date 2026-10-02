import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { media } from "../data";
import Image from "./Image";
import Arrow from "./Arrow";

export default function Hero() {
  const videoRef = useRef(null);
  const reduced = useReducedMotion();
  const [wanted, setWanted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reduced) setWanted(false);
  }, [reduced]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || failed) return;

    const synchronize = () => {
      if (wanted && !reduced && !document.hidden) {
        const promise = video.play();
        if (promise) {
          promise.catch(() => setPlaying(false));
        }
      } else {
        video.pause();
      }
    };

    synchronize();
    document.addEventListener("visibilitychange", synchronize);

    return () => {
      document.removeEventListener("visibilitychange", synchronize);
      video.pause();
    };
  }, [wanted, reduced, failed]);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-media">
        <Image
          src={media.hero}
          alt="Warm, light-filled residential architecture"
          eager
          className="hero-poster"
        />

        {!reduced && !failed && (
          <video
            ref={videoRef}
            className={`hero-video ${ready ? "is-ready" : ""}`}
            src={media.film}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            onPlaying={() => {
              setReady(true);
              setPlaying(true);
            }}
            onPause={() => setPlaying(false)}
            onError={() => {
              setFailed(true);
              setPlaying(false);
            }}
          />
        )}

        <div className="hero-shade" />
      </div>

      <div className="hero-content">
        <motion.p
          className="eyebrow hero-eyebrow"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Considered homes. Extraordinary everyday.
        </motion.p>

        <motion.h1
          id="hero-title"
          initial={reduced ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12 }}
        >
          Spaces for<br />
          a <em>slower</em> life.
        </motion.h1>

        <div className="hero-bottom">
          <p>
            Residential architecture rooted in place.<br />
            Designed around the way you live.
          </p>

          <a className="hero-explore" href="#residences">
            Explore our residences
            <span className="circle-arrow"><Arrow /></span>
          </a>
        </div>
      </div>

      <div className="hero-caption">
        <span>FORM / Architecture & interiors</span>

        {!reduced && !failed ? (
          <button
            className="film-toggle"
            onClick={() => {
              if (playing) {
                setWanted(false);
                videoRef.current?.pause();
              } else {
                setWanted(true);
                videoRef.current?.play().catch(() => setPlaying(false));
              }
            }}
            aria-label={playing ? "Pause background film" : "Play background film"}
          >
            <span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span>
            {playing ? "Pause film" : "Play film"}
          </button>
        ) : (
          <span>Light. Landscape. Living.</span>
        )}
      </div>
    </section>
  );
}
