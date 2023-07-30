import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArticleModel } from '../home/models/response/news-list.model';
import moment from 'moment';

type Props = {}

const NewsArticle = ({ }: Props) => {

    const location = useLocation();

    let newsfeed: ArticleModel = location.state.newsfeed;

    return (
        <React.Fragment>
            {newsfeed && <main className="article-page">
                <article>
                    <header className="article-header">
                        <h1 className="article-title">{newsfeed.title}</h1>
                        <p className="article-meta">
                            Published on <span className="article-date">{moment(newsfeed.publishedAt).format('DD MMMM YYYY')}</span> by{" "}
                            <span className="article-author">{newsfeed.author}</span>
                        </p>
                        <p className="article-source">
                            {newsfeed.source.name}
                        </p>
                    </header>
                    <div className="article-image">
                        <img src={newsfeed.urlToImage} alt="Article Image" />
                    </div>
                    <div className="article-content">
                        <p>{newsfeed.content} <a href={newsfeed.url} target='_blank'>read more...</a></p>
                    </div>
                </article>
            </main>}
        </React.Fragment>
    )
}

export default NewsArticle;