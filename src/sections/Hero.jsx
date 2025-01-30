import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
import { motion } from 'framer-motion'
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  useEffect(() => {
    console.log(bigShoeImg);
    
  }, [bigShoeImg])
  
  return (
    <section id="#home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
      <motion.div 
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  pt-28"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        >
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active like</p>
        <Button label="Shop now" iconURL={arrowRight}/>
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-[url(/src/assets/images/collection-background.svg)] bg-center bg-cover">
        <motion.img 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
          src={bigShoeImg} 
          alt='show collection'
          width={610}
          height={500}
          className='object-contain relative z-10'
        />

        <motion.div  
          className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6"
          initial={{bottom: "-20%"}}
          animate={{bottom: "-5%"}}
          transition={{duration: 1}}
          >
          {shoes.map((shoe) => (
            <div key={`${shoe.thumbnail}`}>
              <ShoeCard 
                imgUrl={shoe}
                changeBigShoe={(shoe) => setBigShoeImg(shoe)} 
                bigShoeImg={bigShoeImg}/>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero