import Image from "next/image";
// import nextImage from "../../assets/docs-og.png";
import nextImage from "@/assets/docs-og.png";

export const metadata = {
  title: "Test App || Gallery",
  description: "This is gallery page",
};
const GalleryPage = () => {
  return (
    <div className="">
      <h1>Image optimization Online</h1>
      <Image
        height={500}
        width={500}
        // fill
        src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt="next image"
        className="mx-auto"
      />
      <h1>Image optimization Local</h1>
      <Image
        height={500}
        width={500}
        // fill
        src={nextImage}
        alt="next image"
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
