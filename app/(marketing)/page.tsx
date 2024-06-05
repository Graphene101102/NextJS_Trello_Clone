import { Button } from "@/components/ui/button"
import { Medal } from "lucide-react"
import Link from "next/link"

const MarketingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col">
        <div className="flex mb-4 items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          number 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 font-bold">
          Trello help team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Collaborate, manage project, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with Trello.
      </div>
      <Button className="mt-6" size="lg" variant="primary" asChild >
        <Link href="/sign-in">
          Get Trello  for free
        </Link>
      </Button>
    </div>
  )
}

export default MarketingPage