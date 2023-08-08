 "use client"

import { DogGenerator } from "@/components/DogGenerator";

const Page = () => {

return(
  <>
  <div className="container mx-auto">
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-xl md:text-3xl px-7 py-5 rounded-xl my-5 bg-gray-800">Gerador de Fotos de Cachorros</h1>

      <DogGenerator/>
      



    </div>
  </div>
  </>
)
}


export default Page;