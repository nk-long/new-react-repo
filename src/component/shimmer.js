const Shimmer = () => {
  return (
    <div className="reataraunt-List">
     {
      Array(10).fill("").map(()=>(
        <div className="shimmer-ui"></div>
      ))
     }
    </div>
  );
};

export default Shimmer;
