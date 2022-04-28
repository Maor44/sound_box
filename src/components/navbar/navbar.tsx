import './navbar.scss';

interface NavbarProps {
  title: string;
}

const Navbar = ({title}: NavbarProps) => {
  return (
    <nav className='navbar'>
        <h1 className='navbar__title'>{title}</h1>
    </nav>
  )
}

export default Navbar