// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
        <h1>Welcome to Matterscope</h1>
        <p>Your ultimate app solution.</p>
      </header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/terms-of-service">Terms of Service</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <main>
        <section>
          <h2>About Our App</h2>
          <p>Matterscope provides innovative solutions to manage your tasks and projects efficiently.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Matterscope. All rights reserved.</p>
        <p>Contact us at: <a href="mailto:matterscope@gmail.com">matterscope@gmail.com</a></p>
      </footer>
    </>
  )
}
