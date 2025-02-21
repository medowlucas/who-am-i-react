import React, { useState, useEffect } from 'react';

const LinkedInPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Carregar os posts do arquivo JSON na pasta public
    fetch(`${process.env.PUBLIC_URL}/posts.json`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Erro ao carregar posts:", error));
  }, []);

  return (
    <div className="posts-container">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h3>Post #{post.id}</h3>
            <iframe 
              src={post.iframeSrc} 
              height="330" 
              width="504"
              frameBorder="0" 
              allowFullScreen=""
              title={`Post ${post.id}`}
            />
          </div>
        ))
      ) : (
        <p>Carregando posts...</p>
      )}
    </div>
  );
};

export default LinkedInPosts;
