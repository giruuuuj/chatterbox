// Profile Object for Abhijeet Kale
const profile = {
    name: "",
    education: {
        degree: "BTech",
        major: "Computer Science and Engineering",
        institution: "Your University Name", // Replace with your actual university name
        graduationYear: 2024 // Replace with your expected graduation year
    },
    skills: [
        "Java",
        "C",
        "C++",
        "Python",
        "JavaScript", // You can add more skills here
        "HTML",
        "CSS",
        "Data Structures",
        "Algorithms"
    ],
    interests: [
        "Web Development",
        "Machine Learning",
        "Competitive Programming",
        "Open Source Contribution"
    ],
    contact: {
        email: "your.email@example.com", // Replace with your actual email
        linkedin: "https://www.linkedin.com/in/yourprofile", // Replace with your LinkedIn profile
        github: "https://github.com/yourusername" // Replace with your GitHub username
    },
 summary: function() {
        return `${this.name} is a BTech CSE student skilled in ${this.skills.join(", ")}. Interested in ${this.interests.join(", ")}.`;
    }
};

// Display the profile summary
console.log(profile.summary()); ```javascript
