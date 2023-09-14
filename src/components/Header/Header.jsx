import profile from '../../assets/rana.jpg';
const Header = () => {
    return (
        <div className='flex justify-between m-4 p-4 border-b-2 items-center '>
             <h1 className='text-4xl font-bold '>React Knowledge Cafe</h1>
             <img className='h-20 w-20 rounded-full' src={profile} alt="" />

        </div>
    );
};

export default Header;