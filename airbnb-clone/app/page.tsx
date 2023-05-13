import getListings from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";

export default async function Home() {
  const listings = await getListings()

  if (listings.length == 0) {
    return (
      <ClientOnly>
        <EmptyState showReset/>
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          <div>
            {listings.map((listing:any) => {
              return (
                <div>{listing.title}</div>
              )
            })}
          </div>
        </div>
      </Container>
    </ClientOnly>
    )
}
