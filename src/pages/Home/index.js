import NavBar from '../../components/NavBar';
import './styles.css';
import instance from '../../fetch/axios';
import React, { useEffect, useState } from 'react';
import Featured from '../../components/articleCards/featured/';
import HeadLine from '../../components/articleCards/headLine/';
import DefaultCard from '../../components/articleCards/default/';
import { useAnimation, motion } from 'framer-motion';
import  { useInView } from 'react-intersection-observer';




function Home() {

    const animation = useAnimation()

    const [newsRef, newsView] = useInView({

      triggerOnce: true,
      rootMargin: '-200px'
  
    })

    useEffect(() => {
      if(newsView){
        animation.start('newsVisible')
      }
    }, [animation, newsView])


    const [data0, setData0] = useState('')
    const [data1, setData1] = useState('')
    const [data2, setData2] = useState('')
    const [data3, setData3] = useState('')
    const [data4, setData4] = useState('')
    const [data5, setData5] = useState('')

    useEffect(() => {
        async function getData() {
            const request = await instance.get('')
            setData0(request.data[0])
            setData1(request.data[1])
            setData2(request.data[2])
            setData3(request.data[3])
            setData4(request.data[4])
            setData5(request.data[5])
        }

        getData()
      }, [])


  return (
<>
    <NavBar />   
    <motion.div   
    exit={{y: 300, opacity: 0 }}
    transition={{duration: 0.6}}  
    className="home">

<div className="mainNews">

    <Featured 
    className={'featured'}
    topic={'Politics'}
    style={{color: 'rgb(219, 102, 102)'}} 
    src={data0.image_url} alt={'Obama'} 
    title={data0.title}
    author={data0.authors}
    />

    <HeadLine
    className={'headLine1'}
    topic={'Tech'}
    style={{color: 'rgb(63, 63, 182)'}} 
    src={data1.image_url} alt={'Taxi'}
    title={data1.title} author={data1.authors} 
    content={data1.content}
    />

    <HeadLine 
    className={'headLine2'}
    topic={'Science'}
    style={{color: 'rgb(90, 170, 90)'}} 
    src={data2.image_url} alt={'Sky'} 
    title={data2.title} 
    author={data2.authors} 
    content={data2.content}
    />

</div>

<motion.div
 className="secondaryNews" 
 ref={newsRef}
 animate={animation}
 initial='hidden'
 variants={{
   newsVisible:{
     opacity: 1,
     x: 0,
     transition: {duration: 1}
   },
   hidden: {
     opacity: 0,
     x: 100
   }
 }} >

      <DefaultCard 
        topic={'Sports'}
        style={{color: 'rgb(214, 142, 7)'}}
        title={data3.title}
        author={data3.authors}
        content={data3.content}/>

      <DefaultCard
        topic={'Tech'}
        style={{color: 'rgb(63, 63, 182)'}} 
        title={data4.title}
        author={data4.authors}
        content={data4.content}/>

      <DefaultCard 
        topic={'Science'}
        style={{color: 'rgb(90, 170, 90)'}} 
        title={data5.title} 
        author={data5.authors}
        content={data5.content}/>
</motion.div>
    </motion.div>
</>
  );
}

export default Home;
