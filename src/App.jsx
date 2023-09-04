import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://avatars.githubusercontent.com/u/47013778?v=4"
        name="Leonardo Ramidan"
        bio="Front-End javascript developer on GitHub."
        email="leonardoramidan@hotmail.com"
        phone="+55(21)998737740"
        githubUrl="https://github.com/LeoRam84"
        linkedinUrl="https://www.linkedin.com/in/leonardocram/"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}