import React, { useContext } from "react";
import { ContextoTema } from "../contextos/contextoTema";
export default function Blog() {
  const ctx = useContext(ContextoTema);
  const posts=ctx.propiedades.posts

  return (
    <div>
        <h2>Blog</h2>
        <ul>
        {posts.map((post,index)=>{
          return(<li key={index}>
            {post.post}
          </li>)

        })}
        </ul>
    </div>
  );
}
