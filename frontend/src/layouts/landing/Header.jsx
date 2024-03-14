import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';

import hero1 from '../../assets/images/hero-1.webp'
import hero2 from '../../assets/images/hero-2.webp'

function Header() {

    const [articles, setArticles] = useState([]);
    const [displayedArticles, setDisplayedArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch articles
        fetch(import.meta.env.VITE_API_ARTICLE)
            .then(response => response.json())
            .then(data => {
                setArticles(data);
                setLoading(false); // Set loading to false when articles are fetched
                const topArticles = data.slice(0, 3);
                setDisplayedArticles(topArticles); // Set recent articles as initially displayed
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false); // Set loading to false in case of error
            });
    }, []);

    const handlePopularClick = () => {
        const bottomArticles = articles.slice(0, 3);
        setDisplayedArticles(bottomArticles);
    };
    
    const handleRecentClick = () => {
        const topArticles = articles.slice().reverse().slice(0, 3);
        setDisplayedArticles(topArticles);
    };

  return (
    <header>
        <div className="py-8 grid lg:grid-cols-2 gap-4">
            {/* Left */}
            <div className="flex flex-col space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className='py-24 sm:py-36 md:py-48 rounded-3xl shadow-2xl bg-center bg-cover' style={{backgroundImage: `url(${hero1})`}} alt="Opportunities Meet Aspirations" title='Kenya Jobs | Opened Career'></div>
                    <div className='py-24 sm:py-36 md:py-48 rounded-3xl shadow-2xl bg-center bg-cover' style={{backgroundImage: `url(${hero2})`}} alt="Opportunities Meet Aspirations" title='Kenya Jobs | Opened Career'></div>
                </div>
                <div className="grad-to-br rounded-3xl py-6 px-6 sm:px-8 shadow-2xl">
                    <p className="text-whity text-sm md:text-base">
                        Discover exciting job opportunities tailored just for you. 
                        including internships, scholarships, and rewarding positions 
                        across diverse industries We are Bridging the Gap, 
                        Opportunities Meet Aspirations.
                    </p>
                </div>
            </div>

            {/* Right */}
            <div className="bg-whity rounded-3xl px-6 py-4 shadow-2xl">
                    {/* Top */}
                    <div className="flex items-center justify-evenly py-4">
                        <div className="text-whity font-semibold">
                            <button onClick={handlePopularClick} className='grad-to-br px-8 py-2 rounded-3xl shadow-lg focus:outline-none focus:ring focus:ring-cyan-300 transition duration-200 transform hover:scale-110'>Popular</button>
                        </div>
                        <div className="text-whity font-semibold">
                            <button onClick={handleRecentClick} className='grad-to-br px-8 py-2 rounded-3xl shadow-lg focus:outline-none focus:ring focus:ring-cyan-300 transition duration-200 transform hover:scale-110'>Recent</button>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="py-2">
                        {/* Post */}
                        {loading ? (
                            <div className="flex justify-center items-center py-4">
                                <span className="loading loading-dots loading-lg text-center text-primary"></span>
                            </div>
                        ):(
                            <>
                            {displayedArticles.map((article) => (
                                <div className="py-1 hover:underline" key={article.id}>
                                    <Link to={`/article/${article.id}`} className="flex items-center justify-start space-x-4">
                                        <div className="p-12 sm:p-10 rounded-full bg-center bg-cover shadow-2xl transition duration-200 transform hover:scale-110" style={{backgroundImage: `url(${article.image})`,}} alt="Opportunities Meet Aspirations" title='Kenya Jobs | Opened Career'>
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <h6 className="text-secondary font-semibold text-lg">{article.title}</h6>
                                            <div className="flex text-xs space-x-3 text-secondary">
                                                <p>by <span className="text-primary font-semibold italic">Elijah Maina</span></p>
                                                <p>{new Date(article.post_date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="py-4">
                                        <hr className="bg-secondary h-[1px] max-w-xs lg:max-w-md mx-auto" />
                                    </div>
                                </div>
                            ))}
                            </>
                        )}

                    </div>
                </div>

        </div>
    </header>
  )
}

export default Header