import useSWR from 'swr'
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const page3 = ()=>{
    const url = 'https://www.b-tour.kr/block-tour-front/api/cmmn/noticelist'
    const { data, error } = useSWR(url, fetcher)

    if (error) return "An error has occurred."
    if (!data) return "Loading..."
    const list = data.success?data.result : null

    return (<>
        <div>page3</div>
        {list.map(item=>
            <div key={item.noticeId}>{item.noticeId} |
                <Link href={"/pages/[noticeId]"} as={`/pages/${item.noticeId}`}><a>{item.noticeSj}</a></Link>
            </div>
        )}
        </>)
}

export default page3