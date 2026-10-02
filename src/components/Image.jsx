import fallback from "../assets/architecture-fallback.svg";

export default function Image({
  src,
  alt,
  className = "",
  eager = false,
  ...props
}) {
  return (
    <img
      {...props}
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      onError={(event) => {
        const image = event.currentTarget;
        if (image.dataset.fallback) return;
        image.dataset.fallback = "true";
        image.src = fallback;
      }}
    />
  );
}
