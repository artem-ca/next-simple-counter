const menu = [
    { title: 'Counter', path: '/' },
    { title: 'About', path: '/about' },
]

export default function Header() {
    return (
        <header className='header'>
            <ul className='header-ul'>
                {menu.map((item) => (
                    <li className='header-li'>
                        <a href={item.path}>{item.title}</a>
                    </li>
                ))}
            </ul>
            {/* <a href='/'>Home</a> | <a href='/about'> About</a> */}
        </header>
    )
}
