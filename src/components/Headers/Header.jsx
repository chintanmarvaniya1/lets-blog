import Container from '../Container';
import logo from '../../assets/logo.png'
import LogoutBtn from './LogoutBtn';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const userStatus = useSelector((state) => state.user.status);

  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: '/login',
      active: !userStatus
    },
    {
      name: "Signup",
      slug: '/signup',
      active: !userStatus
    },
    {
      name: "All Posts",
      slug: '/all-posts',
      active: userStatus
    },
    {
      name: "Add Post",
      slug: '/add-post',
      active: userStatus
    }
  ]
  return (

    <div className='bg-white shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Link className="no-underline" to='/'>
              <img className="hidden lg:block h-14 w-auto" src={logo} alt="Logo" />
            </Link>
            <span class="font-quicksand font-bold text-3xl ml-2">Lets Blog</span>
          </div>
          <ul className='flex ml-auto items-center'>
            {
              navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      className='font-quicksand inline-block px-6 py-2 font-bold text-xl duration-200 text-custom-primary-dark hover:text-custom-secondary-dark  rounded-md'
                      onClick={() => navigate(item.slug)}>
                      {item.name}
                    </button>
                  </li>
                ) : null
              )
            }
            {userStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>

    // <header className='py-3 shadow bg-gray-500'>
    //   <Container>
    //     <nav className='flex'>
    //       <div className='mr-4'> 
    //       <Link to='/'>
    //         <h1>CM</h1>
    //       </Link>
    //       </div>
    //       <ul className='flex ml-auto'>
    //         {
    //           navItems.map((item)=>
    //             item.active ? (
    //               <li key={item.name}>
    //                 <button
    //                 className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    //                 onClick={()=> navigate(item.slug)}>
    //                   {item.name}
    //                 </button>
    //               </li>
    //             ) : null
    //           )
    //         }
    //         {userStatus && (
    //           <li>
    //             <LogoutBtn/>
    //           </li>
    //         )}
    //       </ul>
    //     </nav>
    //   </Container>
    // </header>
  )
}

export default Header