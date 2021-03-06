import React, { useState } from 'react';
import baseClassMerge from '../base/base';
import { Link } from 'react-router-dom';
import './footer.scss';


interface FootProps {
    activeMenu: string
    className?: string | { [key: string]: boolean }
}

export default function FooterHook(props: FootProps) {

    const [activeMenu, setActiveMenu] = useState(props.activeMenu);
    const footClass = baseClassMerge("footer", props.className);
    const liClass = (menu: string) => {
        return baseClassMerge("li-menu", { "active": activeMenu === menu });
    }

    return (
        <footer className={footClass}>
            <ul className="menu">
                <Link to="/home" className="link">
                    <li key="menu-about" className={liClass("about")} onClick={() => setActiveMenu("about")}>
                        <div className="icon about"></div>
                        <div className="label">名片</div>
                    </li>
                </Link>
                <Link to="/blog" className="link">
                    <li key="menu-blog" className={liClass("blog")} onClick={() => setActiveMenu("blog")}>
                        <div className="icon blog"></div>
                        <div className="label">博客</div>
                    </li>
                </Link>
                {/* <li key="menu-life" className={liClass("life")} onClick={() => setActiveMenu("life")}>
                    <div className="icon life"></div>
                    <div className="label">人生</div>
                </li> */}
                <Link to="/music" className="link">
                    <li key="menu-music" className={liClass("music")} onClick={() => setActiveMenu("music")}>
                        <div className="icon music"></div>
                        <div className="label">音乐</div>
                    </li>
                </Link>
                {/* <li key="menu-contact" className={liClass("contact")} onClick={() => setActiveMenu("contact")}>
                    <div className="icon contact"></div>
                    <div className="label">联系</div>
                </li> */}
            </ul>
        </footer>
    )

}