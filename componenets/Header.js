import Link from "next/link";

const Header = ()=>{

    return <>
        <header id="header" className="header">
            <div className="header">
                <div className="inner">
                    <Link href="/pages/page1" >page1</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="/pages/page2" >page2</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="/pages/page3" >page3</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </header>
    </>;
}

export default Header