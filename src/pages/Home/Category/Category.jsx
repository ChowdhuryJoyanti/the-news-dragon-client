import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const catagoryNews = useLoaderData();

    
    return (
        <div>
          { id && <h4>This catagory news :{catagoryNews.length}</h4>}
            {
                catagoryNews.map(news => <NewsCard

                    key={news._id}
                    news={news}

                ></NewsCard>)
            }
        </div>
    );
};

export default Category;
