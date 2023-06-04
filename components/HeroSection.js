import Image from '@/components/Image'

function HeroSection() {
  return (
    <div className="items-start space-y-2 pt-8 pb-10 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      <div className="col-span-2 flex flex-row flex-wrap items-center">
        <Image
          src="/static/images/avatar.png"
          alt="avatar"
          width="80px"
          height="80px"
          className="h-48 w-48 rounded-full"
        />
        <h1 className="mx-3 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Sohaib Salman
        </h1>
        <p className="mt-3">
          A passionate Software Engineer and a self-learner, creating content for elegant software
          solutions.
        </p>
        <p className="prose max-w-none pt-8 pb-8 dark:prose-dark">
          Topics: ASP.NET, C#, Javascript, Typescript, React, Angular, Design Patterns, Clean Code,
          REST API's, Software Development, Web Development
        </p>
      </div>
      <div className="flex flex-row items-center pt-8"></div>
    </div>
  )
}

export default HeroSection
