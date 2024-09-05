
const Bookmark = ({bookmark}) => {
    const {title}=bookmark
   
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
            <h2 className="text-2xl" >Title: {title} </h2>
        </div>
    );
};

export default Bookmark;



// rafct-->Better react code snippet