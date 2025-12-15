export default function HeaderCard({src}) {
  let className = "group flex bg-cover p-1 md:p-2 transition duration-150 justify-center lg:justify-between items-center dark:text-white bg-gray-100 dark:bg-gray-600 rounded-lg";
  return (
    <div
      className={className}
    >
      <img
        src={src}
        alt={src}
        className=" group-hover:scale-110 transition-transform duration-300"
      />
      <div className="text flex flex-col dark:text-dark-text ">
        <p>sales and offers</p>
        <span className="flex items-center gap-2 font-bold text-gray-400">
          <p>up <br/> to</p>
          <span className="text-primary text-2xl font-semibold">70%</span>
        </span>
          <p className="font-bold text-nowrap transition duration-300 group-hover:text-primary">shop now</p>
      </div>
    </div>
  );
}
