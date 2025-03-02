import pymongo
import json
from datetime import datetime

# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["Portfolio"]

# Sample project data
projects = [
    {
        "title": "AI-Powered Task Manager",
        "description": "A task management application with AI capabilities to prioritize and categorize tasks automatically.",
        "image": "/placeholder.svg?height=400&width=600",
        "tags": ["React", "Python", "MongoDB", "Machine Learning"],
        "githubUrl": "https://github.com/johndoe/ai-task-manager",
        "liveUrl": "https://ai-task-manager.vercel.app",
        "featured": True,
        "createdAt": datetime.now()
    },
    {
        "title": "E-commerce Platform",
        "description": "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
        "image": "/placeholder.svg?height=400&width=600",
        "tags": ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
        "githubUrl": "https://github.com/johndoe/ecommerce-platform",
        "liveUrl": "https://ecommerce-platform.vercel.app",
        "featured": True,
        "createdAt": datetime.now()
    },
    {
        "title": "Data Visualization Dashboard",
        "description": "Interactive dashboard for visualizing complex datasets with filtering and export capabilities.",
        "image": "/placeholder.svg?height=400&width=600",
        "tags": ["React", "D3.js", "Python", "Flask"],
        "githubUrl": "https://github.com/johndoe/data-viz-dashboard",
        "liveUrl": "https://data-viz-dashboard.vercel.app",
        "featured": True,
        "createdAt": datetime.now()
    },
    {
        "title": "Social Media Analytics Tool",
        "description": "Tool for tracking and analyzing social media engagement across multiple platforms.",
        "image": "/placeholder.svg?height=400&width=600",
        "tags": ["React", "Node.js", "MongoDB", "Chart.js"],
        "githubUrl": "https://github.com/johndoe/social-analytics",
        "liveUrl": "https://social-analytics.vercel.app",
        "featured": False,
        "createdAt": datetime.now()
    },
    {
        "title": "Real-time Collaboration App",
        "description": "Application enabling real-time document editing and collaboration between multiple users.",
        "image": "/placeholder.svg?height=400&width=600",
        "tags": ["React", "Socket.io", "MongoDB", "Express"],
        "githubUrl": "https://github.com/johndoe/collab-app",
        "liveUrl": "https://collab-app.vercel.app",
        "featured": False,
        "createdAt": datetime.now()
    },
    {
        "title": "Personal Finance Tracker",
        "description": "Application for tracking personal finances, expenses, and generating insights on spending habits.",
        "image": "/placeholder.svg?height=400&width=600",
        "tags": ["React", "Python", "MongoDB", "Pandas"],
        "githubUrl": "https://github.com/johndoe/finance-tracker",
        "liveUrl": "https://finance-tracker.vercel.app",
        "featured": False,
        "createdAt": datetime.now()
    }
]

# Insert projects into MongoDB
projects_collection = db["projects"]
projects_collection.delete_many({})  # Clear existing data
result = projects_collection.insert_many(projects)

print(f"Inserted {len(result.inserted_ids)} projects into the database")

# Sample skills data
skills = [
    {
        "category": "Frontend Development",
        "items": ["React.js", "Next.js", "HTML5/CSS3", "JavaScript/TypeScript", "Tailwind CSS"]
    },
    {
        "category": "Backend Development",
        "items": ["Python", "Django", "Flask", "Node.js", "Express"]
    },
    {
        "category": "Database",
        "items": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    {
        "category": "Computer Science",
        "items": ["Algorithms", "Data Structures", "System Design", "OOP", "Design Patterns"]
    },
    {
        "category": "Data Science",
        "items": ["NumPy", "Pandas", "Matplotlib", "Data Analysis", "Visualization"]
    },
    {
        "category": "Machine Learning",
        "items": ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"]
    },
    {
        "category": "DevOps",
        "items": ["Docker", "Kubernetes", "CI/CD", "AWS", "Vercel"]
    },
    {
        "category": "Tools & Others",
        "items": ["Git", "GitHub", "VS Code", "Postman", "Figma"]
    }
]

# Insert skills into MongoDB
skills_collection = db["skills"]
skills_collection.delete_many({})  # Clear existing data
result = skills_collection.insert_many(skills)

print(f"Inserted {len(result.inserted_ids)} skill categories into the database")

# Close the connection
client.close()

