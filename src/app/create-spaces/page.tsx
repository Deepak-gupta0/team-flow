import Cards from "./Cards";


const page = () => {
  
  return (
    <div>
      <div>Space template</div>
      <div className="font-bold sm:text-lg lg:text-lg xl:text-2xl lg:my-7  text-slate-900">
        Made for you
      </div>
      <p className="text-slate-800">
        Templates for you based on how similar teams work.
      </p>
      <Cards />
    </div>
  );
};

export default page;
