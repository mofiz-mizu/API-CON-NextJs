import Head from 'next/head';
import { TodoProvider } from '../components/TodoContext';
import MovieList from './movielist';
import Nav from './nav';

export default function Home() {
  return (
    <TodoProvider>
      <div >
        <Head>Next js</Head>
        <h1>Hello World!!</h1>
        <Nav />
        <MovieList />
      </div>
    </TodoProvider>
  )
}
