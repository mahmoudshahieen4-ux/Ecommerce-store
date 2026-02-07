export default function Ads(props) {
  const images = [
    { src: props.img1, alt: "Promotion 1" },
    { src: props.img2, alt: "Promotion 2" },
    { src: props.img3, alt: "Promotion 3" },
  ].filter((img) => img.src);

  if (images.length === 0) return null;

  return (
    <section className="ads w-full mb-12">
      <div className="flex flex-wrap gap-3 w-full">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-1 min-w-[300px] overflow-hidden rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-56 md:h-72 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
