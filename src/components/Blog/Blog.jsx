import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const{ title, cover, reading_time, author_img, author, posted_date, hashtag}=blog;
    return (
        <div>
             <img src={cover} alt={`cover picture: &{title}`} />
             <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img src={author_img}alt="" />
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>

                </div>
             </div>
             <h2>{title}</h2>
             <p>{hashtag}</p>

          
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;