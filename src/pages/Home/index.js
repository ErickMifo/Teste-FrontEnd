import NavBar from '../../components/NavBar';
import './styles.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Featured from '../../components/articleCards/featured/';
import HeadLine from '../../components/articleCards/headLine/';
import DefaultCard from '../../components/articleCards/default/';
import Obama from '../../assets/obama.png';
import Taxi from '../../assets/taxi.jpg';
import Sky from '../../assets/sky.jpg';

const instance = axios.create ({
    baseURL: "https://blog.cheesecakelabs.com/challenge/"
});

function Home() {


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
    <div className="home">
<div className="mainNews">
    <Featured className={'featured'} src={Obama} alt={'Obama'} title={data0.title} author={data0.authors}/>
    <HeadLine className={'headLine1'} src={Taxi} alt={'Taxi'} title={data1.title} author={data1.authors} content={data1.content}/>
    <HeadLine className={'headLine2'} src={Sky} alt={'Sky'} title={data2.title} author={data2.authors} content={data2.content}/>
</div>
<div className="secondaryNews">
      <DefaultCard title={data3.title} author={data3.authors} content={data3.content}/>
      <DefaultCard title={data4.title} author={data4.authors} content={data4.content}/>
      <DefaultCard title={data5.title} author={data5.authors} content={data5.content}/>
</div>
    </div>
</>
  );
}

export default Home;
