import { useQuery } from "@tanstack/react-query";

const useTanstack = (catagory) => {
    const {data, isLoading, refetch} = useQuery({
      queryKey: ['tacnologi',catagory],
      queryFn: async()=>{
          const catagoresData = await fetch(`https://serverlite-assignament.vercel.app/catagory/${catagory}`)
          const catagorys = await catagoresData.json()
          return catagorys;
      }
  })
    return {data, isLoading, refetch};
};

export default useTanstack;