import React, { useEffect, useState } from 'react'
import newsApi from './newsApi'
import './main.scss'
import moment from 'moment'

const NewsData = () => {

    const [newsData, setNewsData] = useState([])
    const [selectCategory, setSelectCategory] = useState('');


    const allNewsData = async () => {
        let data = await newsApi(selectCategory)
        setNewsData(data.data.articles)
    }
    const changeCategory = (event) => {
        setSelectCategory(event.target.value)
    }
    
    useEffect(() => {
        allNewsData()
    }, [selectCategory])

    return (
        <div className='main'>

            <div className='container'>
                <div className='category-main'>
                    <select name="" id="" onChange={changeCategory}>
                        <option value="General"> General</option>
                        <option value="Sports"> Sports</option>
                        <option value="Business"> Business</option>
                        <option value="Health"> Health</option>
                        <option value="Health"> Health</option>
                        <option value="Entertaiment"> Entertaiment</option>
                        <option value="Science"> Science</option>
                        <option value="Technology">Technology</option>
                    </select>
                </div>
                
                <div className='news-main'>

                    <div className='row'>
                    {newsData.map((news) => {
                        return (
                            <div className='news-content'>
                                <img src={news.urlToImage ? news.urlToImage : 'https://sesupport.edumall.jp/hc/article_attachments/900009570963/noImage.jpg'} alt="" />
                                <div className='news-title'>
                                    <h1>{news?.title}</h1>
                                    <p>{news?.description}</p>
                                    <div className='news-a-d'>
                                        <span>Author : {news?.author ? news.author : "no author"}</span>
                                        <span>{moment(news.publishedAt).format('LL')}</span>
                                    </div>
                                    <a href={news.url} className="read-more" target="_blank">READ MORE</a>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default NewsData
