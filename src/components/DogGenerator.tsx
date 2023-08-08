/* eslint-disable react/jsx-no-undef */
import { Images } from "@/types/images";
import { useEffect, useState } from "react";
import Image from "next/image";

export const DogGenerator = () => {
  const [images, setImages] = useState<Images[]>([]);
  const [refresh, setRefresh] = useState(0);
  const handleRefreshClick = () => {
    setRefresh(prevRefresh => prevRefresh + 1);
  };

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/images/search')
      .then(res => res.json())
      .then(json => {
        setImages(json);
      })
      .finally(() => console.log(images));
  }, [refresh]);

  return (
    <div className="flex flex-col h-[60%] items-center">
        <div>
         <button onClick={handleRefreshClick} className="bg-gray-300 rounded-xl px-6 py-3 text-slate-800 font-bold mb-2">Gerar Foto</button>
      </div>
      <div>
        {images.map(item => (
          <img key={item.id} src={item.url} width={item.width} height={item.height} alt="" />
        ))}
      </div>
      <p>{refresh} fotos geradas.</p>

    </div>
  );
};
