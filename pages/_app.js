import '../styles/globals.css'
import Header from "../componenets/Header";

/**
 * 페이지 전환시 레이아웃을 유지할 수 있습니다.
 * 페이지 전환시 상태값을 유지할 수 있습니다.
 * componentDidCatch 를 이용해서 커스텀 에러 핸들링을 할 수 있습니다.
 * 추가적인 데이터를 페이지로 주입시켜주는게 가능합니다.
 * 글로벌 css를 이곳에 선언합니다.
 *
 */

function MyApp({Component, pageProps}) {
    return (
        <div style={{width: 1000, margin: "0 auto"}}>
            <Header/>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
