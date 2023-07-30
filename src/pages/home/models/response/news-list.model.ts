export interface NewsListModel {
    "status": string,
    "totalResults": number,
    "articles": Array<ArticleModel>
}

export interface ArticleModel {
    "source": SourceModel,
    "author": string,
    "title": string,
    "description": string,
    "url": string,
    "urlToImage": string,
    "publishedAt": string,
    "content": string
}

export interface SourceModel {
    "id": string,
    "name": string
}