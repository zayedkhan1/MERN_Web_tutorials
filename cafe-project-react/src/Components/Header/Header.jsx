import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header  className='flex justify-between items-center m-2 border-b-2 ' >
                 <img src={profile} className='w-28  rounded' alt="" />
                 <h1 className='text-xl font-bold w-28' >
                    Blog Cafe</h1>

        </header>
    );
};

export default Header;