import {useRouter} from "next/router";

export const getStaticPaths = async () => {
    const url = 'https://www.b-tour.kr/block-tour-front/api/cmmn/noticelist'
    const res = await fetch(url)
    const obj = await res.json()
    const list = obj.success? obj.result:null
    console.log(list)
    return {

        paths:[
                {params:{noticeId:"N0000000000000000001"}},
                {params:{noticeId:"N0000000000000000002"}},
                {params:{noticeId:"N0000000000000000003"}},
            ]

        // paths: list.slice(0,9).map(item=>({
        //     params:{
        //         noticeId : item.noticeId.toString()
        //     }
        // }))
        ,fallback:true
    };
}

export const getStaticProps = async (context) => {
    const noticeId = context.params.noticeId
    const url = `http://b-tour.kr/block-tour-front/api/cmmn/noticeview?noticeId=${noticeId}`
    const res = await fetch(url)
    const obj = await res.json()
    const item = obj.success? obj.noticeBass:null

    return {
        props: { item }
    };
}


const Detail = ({item})=>{
    const router = useRouter()

    if(router.isFallback) {
        return <div>isLoading....</div>
    }else{
        return <>
            {item.noticeId} | {item.noticeSj}
            <div dangerouslySetInnerHTML={ {__html: item.noticeDetail} }/>
        </>
    }
}

export default Detail