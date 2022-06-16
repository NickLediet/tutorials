import { MetaTags } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p>
        This site was create to demonstrate my mastaery of Redwood: Look on my
        works, ye mighty, and despair!
      </p>
      <Link to={routes.home()}>Return Home</Link>
    </>
  )
}

export default AboutPage
