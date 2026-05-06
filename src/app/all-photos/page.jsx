import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async () => {
  const res = await fetch("https://pixgen-azure.vercel.app/data.json");
  const photos = await res.json();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mt-12 text-center">All Photos </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {photos.map((photo) => (
          <PhotoCard photo={photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
