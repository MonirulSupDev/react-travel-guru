const HotelRoomCard = ({ stay }) => {
  const {
    title,
    image,
    capacity,
    amenities,
    cancellationFlexibility,
    rating,
    price,
  } = stay;

  const { guests, bedrooms, beds, baths } = capacity;
  const { score, reviewCount } = rating;
  const { perNight, total } = price;

  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure className="w-64 shrink-0 p-4">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-lg object-cover"
        />
      </figure>

      <div className="card-body gap-3 pl-2">
        <h2 className="card-title">{title}</h2>

        <p className="text-base-content/70">
          {guests} guests &nbsp; {bedrooms} bedrooms &nbsp; {beds} beds &nbsp;{" "}
          {baths} baths
        </p>

        <p className="text-base-content/70">{amenities.join(" ")}</p>

        {cancellationFlexibility && (
          <p className="text-base-content/70">{cancellationFlexibility}</p>
        )}

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <span className="text-warning" aria-hidden="true">
              ★
            </span>
            <span className="text-sm font-medium">
              {score} ({reviewCount})
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold">
              ${perNight}
              <span className="font-normal">/night</span>
            </span>
            <span className="text-sm text-base-content/40">${total} total</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomCard;

/* Example usage:

<HotelRoomCard
  stay={{
    title: "Light bright airy stylish apt & safe peaceful stay",
    image: "/images/room.jpg",
    capacity: { guests: 4, bedrooms: 2, beds: 2, baths: 2 },
    amenities: ["Wifi", "Air conditioning", "Kitchen"],
    cancellationFlexibility: "Cancellation flexibility available",
    rating: { score: 4.9, reviewCount: 20 },
    price: { perNight: 34, total: 167 },
  }}
/>
*/
