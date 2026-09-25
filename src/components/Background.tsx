import "./background.css";

export function Background() {
  return (
    <div className="bg" aria-hidden>
      <div className="bg-grid" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
    </div>
  );
}
