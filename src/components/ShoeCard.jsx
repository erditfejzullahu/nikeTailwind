import React from 'react'

const ShoeCard = ({imgUrl, changeBigShoe, bigShoeImg}) => {

    const handleClick = () => {
        if(bigShoeImg !== imgUrl.bigShoe){
            changeBigShoe(imgUrl.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1}`}
    onClick={handleClick}>
        <div className="flex justify-center items-center bg-[url(/src/assets/images/thumbnail-background.svg)] bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgUrl.thumbnail} alt="show collection" width={127} height={103} className="object-contain" />
        </div>
    </div>
  )
}

export default ShoeCard