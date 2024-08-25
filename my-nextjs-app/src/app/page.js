import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Test App || Home Page",
  description: "This is home page ",
};
const HomePgae = async () => {
  const res = await fetch("http://localhost:4000/shoes", {
    // cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  console.log(data);
  // throw new Error("Error from Home Page");
  return (
    <div className="text-center">
      <h1 className="text-3xl text-center">Hello Next JS Again....</h1>
      <div className="flex justify-around gap-8 mt-12">
        {data.slice(0, 3).map((singleData) => (
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
      <Link href={"/all-shoes"}>
        <button className="btn btn-primary my-6">See More</button>
      </Link>
    </div>
  );
};

export default HomePgae;
