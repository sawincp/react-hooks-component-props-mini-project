import Article from "./Article";

const ArticleList=({ posts })=>{
    const blogList = posts.map((post)=>{
        
        return(<Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}

        />
        )
    })
    return(
        <main>{blogList}</main>

    )
}
export default ArticleList