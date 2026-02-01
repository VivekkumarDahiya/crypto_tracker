
import SwipeableTemporaryDrawer from "./drawer";
import style from "./header.module.css";



const Header=()=>{
    return(
        <header  className={style.header}>
            <h1 className={style.logo}>
                CryptoTraker<span style={{ color: "var(--blue)" }}>.</span>
            </h1>
         <nav className={style.nav}>
             <a href="#" className={style.links}>
                <p  className={style.link}>Home</p>
             </a>
             <a href="#" className={style.links}>
                <p  className={style.link}>Watchlist</p>
             </a>
             <a href="#" className={style.links}>
                <p  className={style.link}>Compare</p>
             </a>
             <a href="#" className={style.links}>
                <p  className={style.link}>Dashboard</p>
             </a>
         </nav>
         <div className={style.mobile_drawer}>
        <SwipeableTemporaryDrawer/>
         </div>

        </header>
    )
}

export default Header;