import prisma from '../../lib/prisma';
import ReactMarkdown from "react-markdown";
import Router from "next/router";

export const getStaticProps = async () => {
    const feed = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
    });
    return {
        props: { feed },
        revalidate: 10,
    };
};

const Page2 = ({feed})=>{

    return (<div>
        <h2>page2</h2>
        {feed.map((post) => (
            <div key={post.id} className="post" onClick={() => Router.push("/pages/page2/[id]", `/pages/page2/${post.id}`)} style={{marginTop:"10px",padding:"5px",border:"solid"}}>
                {post.title} | {post.author ? post.author.name : "Unknown author"}
                <div>{post.content}</div>
            </div>
        ))}
    </div>)
}

export default Page2