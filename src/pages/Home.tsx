import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { Sidebar } from "../components/Sidebar";

import styles from "./home.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/ryanolivrdev.png",
      name: "Ryan Oliveira",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fizno NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "ryanolivr.dev" },
    ],
    publishedAt: new Date("2022-07-27 10:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/FabioNeves00.png",
      name: "Fabio Neves",
      role: "Mern Developer",
    },
    content: [
      { type: "paragraph", content: "EGUAAAAA" },
      { type: "paragraph", content: 'Git commit -m "Socorro"' },
      { type: "link", content: "https://github.com/JoaoCardoso00/PI-Plataform" },
    ],
    publishedAt: new Date("2022-07-26 9:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "http://github.com/JoaoCardoso00.png",
      name: "João Cardoso",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Sei centralizar uma div olha só" },
      { type: "link", content: "https://github.com/JoaoCardoso00/Verbo" },
    ],
    publishedAt: new Date("2022-07-26 8:00:00"),
  },
];

export function Home() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  );
}
