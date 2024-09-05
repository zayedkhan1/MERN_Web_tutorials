import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
       <div>
        <div>
            <h2 className="text-2xl text-center bg-lime-300 p-4 ml-4 mt-4 md:1/3"> Total Reading Time:{readingTime} </h2>
        </div>
         <div className="md:1/3 bg-gray-400 ml-4 mt-4" >
        
        
        <h2 className="text-center text-xl bg-orange-300  ">Bookmark Blogs :{bookmarks.length}</h2>
        {
            bookmarks.map(bookmark=><Bookmark 
            key={bookmark.id}
            bookmark={bookmark}
         
            ></Bookmark> )
        }
    </div>
       </div>
    );
};

export default Bookmarks;