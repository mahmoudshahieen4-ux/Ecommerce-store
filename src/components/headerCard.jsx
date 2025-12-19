export default function HeaderCard({src}) {
  let className = "group flex gap-2 bg-cover py-4 md:p-2 transition duration-150 justify-between items-center dark:text-white bg-gray-100 dark:bg-gray-600 rounded-lg";
  return (
    <div
      className={className}
    >
      <div className="w-[50%] flex justify-center">

      <img
        src={src}
        alt={src}
        className=" group-hover:scale-110 transition-transform duration-300 self-center"
      />
      </div>
      <div className="text w-[50%] max-h-[150px] flex flex-col dark:text-dark-text text-lg">
        <p>sales and offers</p>
        <span className="flex items-center gap-2 font-bold text-gray-400">
          <p>up <br/> to</p>
          <span className="text-primary text-2xl font-semibold">70%</span>
        </span>
          <p className="font-bold text-nowrap py-2 text-2xl text-gray-600 lg:text-xl transition duration-300 group-hover:text-primary">shop now</p>
      </div>
    </div>
  );
}
