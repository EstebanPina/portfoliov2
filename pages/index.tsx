import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import HeaderMe from '@/components/HeaderMe'
import { tech_dict } from '@/constants/techs'
import { Variants, motion } from 'framer-motion'

const work_experience=[
  {company:"Neumatica Fromi",position:"Sr. AWS Cloud Developer / CTO",start:"March-2023",end:"Actual",tech_stack:["rct","nxt","ptn","js","ts","psql","aws","azr","lnx","html","tlw","css","cpp","nd","lmd"]},
  {company:"Tyerra",position:"Jr Fullstack Developer",start:"October-2022",end:"May-2023",tech_stack:["rct","nxt","js","mdb","aws","html","tlw","css","nd","lmd"]},
  {company:"Truper",position:"Project Tech Lead",start:"August-2019",end:"January-2022",tech_stack:["jv","js","msql","azr","php","html","css","ard","adr"]},
  {company:"Freelance",position:"Frontend Developer",start:"July-2018",end:"March-2019",tech_stack:["js","msql","lnx","php","html","css","adr"]},
]
const cardVariants: Variants = {
  offscreen: {
    x: 300,
    opacity:0,
  },
  onscreen: {
    x: 0,
    opacity:1,
    transition: {
      type: "Tween",
      bounce: 0.4,
      duration: 0.8
    }
  }
};
export default function Home() {
  return (
    <main className="font-roboto">
    <HeaderMe></HeaderMe>
    <motion.div 
           className='flex flex-col gap-8 p-16 justify-start w-full min-h-screen bg-slate-950'>
      <h2 className='text-7xl font-bebas text-white'>Work Experience</h2>
      {work_experience.map((experience,index)=>{
        return(
          <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}  
          key={index}
          variants={cardVariants} 
          className='font-roboto flex flex-col bg-white/10 shadow-xl shadow-indigo-400/20 px-8 py-4 hover:scale-105 duration-500 rounded-tr-3xl rounded-bl-3xl text-white'>
            <h3 className='text-3xl font-bebas'>{experience.company}</h3>
            <p className='text-xl font-bebas'>{experience.position}</p>
            <p className='text-md font-bebas'>{experience.start} - {experience.end}</p>
            <div className='flex gap-2'>
            {experience.tech_stack.map((tech, index)=>{
              return(
                <span key={index} className='text-xl my-2 font-bebas drop-shadow-2xl hover:text-4xl duration-500'>{tech_dict[tech]}</span>
              )
            })}
            </div>
          </motion.div>
        )
      })}
    </motion.div>
    </main>
  )
}
