import Image from "next/image";

const AllShopesPage = async () => {
  const res = await fetch("http://localhost:4000/shoes", {
    cache: "no-store",
  });

  const data = await res.json();
  return (
    <div>
      <h1 className="text-4xl text-center">All Shoes Here</h1>
      <div className="grid grid-cols-3 gap-6">
        {data.map((singleData) => (
          <div
            key={singleData.id}
            className="card bg-base-100 w-full shadow-xl"
          >
            <Image
              width={400}
              height={200}
              src={singleData.image}
              alt="show-image"
            />

            <div className="card-body">
              <h2 className="card-title">
                {singleData.title}
                <div className="badge badge-secondary">${singleData.price}</div>
              </h2>
              <p>{singleData.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy</button>
                <button className="btn btn-secondary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShopesPage;
