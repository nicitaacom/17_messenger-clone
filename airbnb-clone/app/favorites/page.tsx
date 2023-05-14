import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import FavoritesClient from "./FavoritesClient";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";

const ListingPage = async () => {
  const listings = await getFavoriteListings()
  const currentUser = await getCurrentUser()

  if (listings.length == 0) {
    return (
      <ClientOnly>
        <EmptyState title="No favorites found"
        subTitle="Looks like you have no favorite listings"/>
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <FavoritesClient
      listings={listings}
      currentUser={currentUser}/>
    </ClientOnly>
  )
}

export default ListingPage