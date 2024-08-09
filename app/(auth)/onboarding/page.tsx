import AccountProfile from "@/components/forms/AccoutProfile";

export default async function page() {


  const userData = {
    id: "stysvdsbd2233",
    objectId: "usdnwusdfdfds",
    username: "Tally",
    name: "Montso",
    bio: "Developer",
    image: "https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg",
  }
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
        <h1 className='head-text'>Onboarding</h1>
        <p className='mt-3 text-base-regular text-light-2'>
        Complete your profile now, to use Threds.
      </p>
      <section className='mt-9 bg-dark-2 p-10'>
        <AccountProfile user={userData} btnTitle='Continue' />
      </section>
    </main>
  )
}
