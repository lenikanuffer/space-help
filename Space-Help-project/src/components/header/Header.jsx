import './Header.css';

function Header () {
    return (
        <header className='flex flex-col mb-4'>
            <h1 className='header-title flex justify-center'>
                Space Help
            </h1>
            <h3 className='flex justify-center'>Declutter your universe!</h3>
        </header>
    )
}

export default Header