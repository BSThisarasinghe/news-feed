import React, { useEffect, useState } from 'react';
import { Card, Spin, message } from 'antd';
import { getNewsList } from '../../services/news.service';
import { ArticleModel } from './models/response/news-list.model';
import { NewsCard } from './components/NewsCard';
import InfiniteScroll from 'react-infinite-scroll-component';

type Props = {}

const Home = ({ }: Props) => {

  const [newsList, setNewsList] = useState<Array<ArticleModel>>([]);
  const [newsCount, setNewsCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [country, setCountry] = useState<string>('us');
  const countryList = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
  const fetchNewsList = () => {
    getNewsList(page, pageSize, country).then((response) => {
      if (response.status === 200) {
        if (response.data.status === "ok") {
          setNewsList(newsList => [...newsList, ...response.data.articles])
          setNewsCount(response.data.totalResults);
        }
      }
    }).catch((error) => {
      message.error("Error occured while fetching data!")
    });
  }

  useEffect(() => {
    fetchNewsList();
  }, [page, country]);

  const onLoadMore = () => {
    setPage(page + 1)
  }

  const onChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(1);
    setCountry(e.target.value);
  }

  return (
    <React.Fragment>
      <select className='form-control' onChange={onChangeCountry} value={country}>
        {countryList.map((value: string, index: number) => {
          return (
            <option value={value}>{value}</option>
          )
        })}
      </select>
      <div className='card-wrapper' id="card-wrapper">
        <InfiniteScroll
          dataLength={newsCount}
          next={onLoadMore}
          hasMore={newsList.length < newsCount}
          loader={<div className="spint-wrapper">
            <Spin />
          </div>}
          scrollThreshold="200px"
          height={window.innerHeight}
          scrollableTarget="card-wrapper"
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {newsList.map((value: ArticleModel, index: number) => {
            return (
              <NewsCard
                key={index}
                newsfeed={value}
              />
            )
          })}
        </InfiniteScroll>
      </div>
    </React.Fragment>
  )
}

export default Home;