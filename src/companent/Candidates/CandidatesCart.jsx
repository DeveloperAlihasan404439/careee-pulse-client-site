import './CandidatesCart.css'
const CandidatesCart = ({ results }) => {
  const { images, name, job } = results;
  return (
    <div className="relative rounded-lg box-condidate">
      <img src={images} alt="" className="w-full h-[250px] rounded-lg" />
      <div className="content flex flex-col items-center justify-center">
        <h1 className='text-2xl font-medium tex-white'>{name}</h1>
        <h1 className='py-1'>{job}</h1>
        <button className='py-1 px-6 text-white bg-[#0F3979] rounded-md text-lg uppercase'>view resume</button>
      </div>
    </div>
  );
};

export default CandidatesCart;
