import React, { useState } from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from './Loader'; 
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const { Title } = Typography; 

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const getStats = data?.data?.stats;

  if(isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}> <Statistic title='Total Cryptocurrencies' value={getStats.total}/></Col>
        <Col span={12}> <Statistic title='Total Exchanges' value={millify(getStats.totalExchanges)}/></Col>
        <Col span={12}> <Statistic title='Total Market Cap' value={millify(getStats.totalMarketCap)}/></Col>
        <Col span={12}> <Statistic title='Total 24h Volume' value={millify(getStats.total24hVolume)}/></Col>
        <Col span={12}> <Statistic title='Total Markets' value={millify(getStats.totalMarkets)}/></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Cryptocurrencies News</Title>
        <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage;