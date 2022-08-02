import Link from "next/link";


export const getStaticProps = async () => {
    const url = 'https://www.b-tour.kr/block-tour-front/api/cmmn/noticelist'
    const res = await fetch(url)
    const obj = await res.json()
    const list = obj.success? obj.result:null

    return {
        props: { list }
    };
};

const page1 = ({list})=>{

    return (
        <>
            <div>page1</div>
            {list.map(item=>
                <div key={item.noticeId}>{item.noticeId} |
                    <Link href={"/pages/[noticeId]"} as={`/pages/${item.noticeId}`}><a>{item.noticeSj}</a></Link>
                </div>
            )}
        </>
    )
}

export default page1