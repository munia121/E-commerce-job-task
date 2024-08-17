import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'text-white text-xl border-b-2  font-bold   ' : 'font-bold text-white text-xl'} to={'/'}>Home</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? ' font-bold text-white text-xl border-b-2' : 'font-bold text-white text-xl '} to={'/about'} >About</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? ' font-bold text-white text-xl border-b-2' : 'font-bold text-white text-xl '} to={'/contact'} >Contact US</NavLink></li>
    </>


const handleSignOut = () => {
    logOut()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            // toast.success('User Log out')
            console.log(error)
        })
}



    return (
        <div>
            <div className="navbar py-5 px-4 rounded-md bg-violet-800 lg:w-[1400px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-purple-600">ShopPalace</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">{
                        user ?
                            <>
                                <div >
                                    <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                        <img className={`rounded-full h-10 w-10  `} src={user?.photoURL || 'https://ibb.co/WxjPyWc'} alt="" />
                                    </a>
                                    {/* <Tooltip place="bottom" type='error' id="my-tooltip" style={{ backgroundColor: "rgb(242, 156, 148)", color: "#222" }} ></Tooltip> */}

                                </div>
                                <button className="btn ml-6 bg-gradient-to-r from-blue-400 to-purple-600 " onClick={handleSignOut}>Log out</button>
                            </>
                            :
                            <>
                                <Link to={'/login'} className="btn bg-gradient-to-r from-blue-400 to-purple-600 ">Sing in</Link>
                            </>
                    }
                    {/* <Link to={'/login'} className="btn">Sing in</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navar;