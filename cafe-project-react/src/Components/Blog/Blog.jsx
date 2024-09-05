import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog ,handleAddToBM,handleReadingTime}) => {
    const { author, title, cover_img,hashtags, author_img, reading_time, posted_date } = blog;
    return (
        <div className="mb-10" >  
            <img src={cover_img} alt="" className="w-full mb-5 rounded-2xl" />
            <div className="flex justify-between">
                <div className="flex mb-4">
                    <img src={author_img} className="w-8 rounded-3xl " alt="" />
                    <div className=" ml-6 " >
                        <h3 className="text-xl mb-2">{author} </h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className="flex items-center " >
                    <p> {reading_time} min read </p>
                    <button  onClick={()=>{handleAddToBM(blog)}}  className="ml-2 text-2xl text-red-400 " ><CiBookmark /> </button>
                </div>
            </div>


            <h2 className="text-3xl mb-4" >Title: {title} </h2>
            <p>
                {
                    hashtags.map((hash,idx)=><span
                    key={idx}>
                    <a href="">#{hash}</a>
                    </span>)
                }
            </p>
            <button onClick={()=>{handleReadingTime(reading_time)}} className="mt-4 text-purple-500 font-bold underline" >Mark as Read</button>

        </div>
    );
};

export default Blog;