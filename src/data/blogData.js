export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Khanna Vijay",
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Web Development"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: [
      {
        type: "paragraph",
        text: "React has revolutionized the way we build user interfaces. In this post, we'll explore the fundamentals of React and how to get started with this powerful library."
      },
      {
        type: "heading",
        text: "What is React?"
      },
      {
        type: "paragraph",
        text: "React is a JavaScript library for building user interfaces, particularly single-page applications. It's maintained by Facebook and a community of individual developers and companies."
      },
      {
        type: "code",
        code: "import React from 'react';\n\nfunction App() {\n  return (\n    <div>\n      <h1>Hello, React!</h1>\n    </div>\n  );\n}\n\nexport default App;"
      }
    ],
    relatedPosts: [2, 3]
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    author: "Khanna Vijay",
    date: "March 16, 2024",
    readTime: "7 min read",
    tags: ["React", "Hooks", "JavaScript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: [
      {
        type: "paragraph",
        text: "React Hooks have changed the way we write React components. Let's dive deep into how hooks work and how to use them effectively."
      },
      {
        type: "heading",
        text: "Common Hooks"
      },
      {
        type: "list",
        items: [
          "useState - For managing state",
          "useEffect - For handling side effects",
          "useContext - For consuming context",
          "useReducer - For complex state management"
        ]
      }
    ],
    relatedPosts: [1, 3]
  },
  {
    id: 3,
    title: "Building Responsive UIs with React",
    author: "Khanna Vijay",
    date: "March 17, 2024",
    readTime: "6 min read",
    tags: ["React", "CSS", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    content: [
      {
        type: "paragraph",
        text: "Creating responsive user interfaces is crucial in modern web development. Learn how to build responsive UIs using React and modern CSS techniques."
      },
      {
        type: "heading",
        text: "Best Practices"
      },
      {
        type: "list",
        items: [
          "Use CSS Grid and Flexbox",
          "Implement mobile-first design",
          "Utilize CSS media queries",
          "Consider performance optimization"
        ]
      }
    ],
    relatedPosts: [1, 2]
  }
]; 