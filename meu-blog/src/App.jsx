import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        // Faz a query na tabela 'posts' selecionando todos os campos
        let { data, error } = await supabase
          .from('blog')
          .select('*')
          .order('created_at', { ascending: false }); // Mais recentes primeiro

        if (error) throw error;
        setPosts(data);
      } catch (error) {
        console.error('Erro ao carregar posts:', error.message);
      } finally {
        setLoading(false);
      }
    }0,

    fetchPosts();
  }, []);

  if (loading) return <p>Carregando posts...</p>; 

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Meu Blog</h1>
      <hr />
      {posts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        posts.map((post) => (
          <article key={post.id} style={{ marginBottom: '40px' }}>
            <h2>{post.title}</h2>
            <small>{new Date(post.created_at).toLocaleDateString()}</small>
            {post.cover_url && <img src={post.cover_url} alt={post.title} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />}
            <p>{post.content.substring(0, 150)}...</p>
            <button>Ler mais</button>
          </article>
        ))
      )}
    </div>
  );
}

export default App;