import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://pixgen-azure.vercel.app/data.json");
  const photos = await res.json();
  const TopPhotos = photos.slice(0, 8);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mt-12 text-center">Top Generations </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {TopPhotos.map((photo) => (
          <PhotoCard photo={photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
