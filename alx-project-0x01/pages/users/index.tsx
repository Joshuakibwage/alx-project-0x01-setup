// import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

type UsersPageProps = {
  posts: UserProps[];
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}


export default function Users({ posts }: UsersPageProps) {
  return (
    <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((user) => (
        <UserCard 
            key={user.id} 
            {...user} 
        />
      ))}
    </div>
  );
}
