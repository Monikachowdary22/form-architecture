import { useState } from "react";
import Arrow from "./Arrow";

export default function BriefForm() {
  const [downloaded, setDownloaded] = useState(false);

  function submit(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);

    const brief = [
      "FORM — Residential project brief",
      "",
      `Name: ${values.get("name")}`,
      `Email: ${values.get("email")}`,
      `Project location: ${values.get("location")}`,
      `Project type: ${values.get("type")}`,
      "",
      "Project vision",
      String(values.get("vision")),
      "",
      "Prepared locally. This brief has not been sent to a studio.",
    ].join("\n");

    const blob = new Blob([brief], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "FORM-project-brief.txt";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloaded(true);
  }

  return (
    <div className="brief-content">
      <p className="eyebrow">
        Every home begins with a conversation
      </p>

      <h2 id="brief-title">
        Tell us what<br />
        you <em>imagine.</em>
      </h2>

      <p className="brief-intro">
        Create a project brief to save and share with your architect.
        Your information stays in this browser and is not submitted.
      </p>

      <form onSubmit={submit}>
        <div className="form-grid">
          <label>
            Your name
            <input
              name="name"
              autoComplete="name"
              required
              maxLength={100}
            />
          </label>

          <label>
            Email address
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={200}
            />
          </label>

          <label>
            Project location
            <input
              name="location"
              placeholder="City, region"
              required
              maxLength={150}
            />
          </label>

          <label>
            Project type
            <select name="type" defaultValue="New residence">
              <option>New residence</option>
              <option>Renovation & addition</option>
              <option>Interior architecture</option>
              <option>Still exploring</option>
            </select>
          </label>
        </div>

        <label>
          What does home mean to you?
          <textarea
            name="vision"
            rows={4}
            placeholder="Tell us about your site, your plans, and how you want to live."
            required
            maxLength={5000}
          />
        </label>

        <button className="solid-button" type="submit">
          Download your brief <Arrow diagonal />
        </button>

        <p role="status" className="form-status">
          {downloaded
            ? "Your brief is ready. Check your downloads. Nothing was sent."
            : "Downloads as a plain text document."}
        </p>
      </form>
    </div>
  );
}
