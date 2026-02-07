export default function Ads(props) {
  return (
    <section className="ads w-full mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Image 1: Always visible */}
        {props.img1 && (
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
            <img
              src={props.img1}
              alt="Promotion 1"
              className="w-full h-56 md:h-72 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </div>
        )}

        {/* Image 2: Hidden on mobile (sm), visible on md and up */}
        {props.img2 && (
          <div className="hidden md:block overflow-hidden rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
            <img
              src={props.img2}
              alt="Promotion 2"
              className="w-full h-56 md:h-72 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </div>
        )}

        {/* Image 3: Hidden on mobile and tablet, visible on lg and up */}
        {props.img3 && (
          <div className="hidden lg:block overflow-hidden rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
            <img
              src={props.img3}
              alt="Promotion 3"
              className="w-full h-56 md:h-72 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </div>
        )}
      </div>
    </section>
  );
}