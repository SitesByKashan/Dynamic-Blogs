// components/BlogCard.tsx

import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; };
  isDarkBackground: boolean; // Add a new prop to indicate background color
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card className={`p-4 ${isDarkBackground ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
      <CardContent>
        <p>{post.description}</p>
        <p className={`text-sm mt-2 ${isDarkBackground ? 'text-gray-400' : 'text-gray-600'}`}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
      </CardContent>
      <a href={`/posts/${post.id}`} className={`inline-block mt-4 ${isDarkBackground ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
        Read more
      </a>
    </Card>
  );
}
