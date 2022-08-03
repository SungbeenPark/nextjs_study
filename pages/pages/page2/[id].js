import prisma from '../../../lib/prisma';

export const getServerSideProps = async ({ params }) => {
    const post = await prisma.post.findUnique({
        where: {
            id: String(params?.id),
        },
        include: {
            author: {
                select: { name: true },
            },
        },
    });
    return {
        props: post,
    };
};

const Page2Detail = (props)=>{

    return (
        <div>
            <h2>{props.title}</h2>
            <p>By {props?.author?.name || "Unknown author"}</p>
            <div>{props.content} </div>
        </div>
    )

}

export default Page2Detail