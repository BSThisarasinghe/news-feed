import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import { ArticleModel } from '../models/response/news-list.model';

type Props = {
    newsfeed: ArticleModel;
};

const NewsCard: React.FC<Props> = ({ newsfeed }) => {
    return (
        <>
            <div className='card'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                        <img src={newsfeed.urlToImage} alt="News" />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                        <Link to={{
                            pathname: `/news`
                        }}
                            state={{ newsfeed: newsfeed }}
                        ><h4>{newsfeed.title}</h4></Link>
                        <p>{newsfeed.description}</p>
                        <div className='text-wrapper'>
                            <div>
                                <label>By {newsfeed.author}</label>
                                <label>{moment(newsfeed.publishedAt).format('DD MMMM YYYY')}</label>
                            </div>
                        </div>
                        <p>{newsfeed.source.name}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export { NewsCard };
