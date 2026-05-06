const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://pixgen-azure.vercel.app/data.json");
  const photos = await res.json();

  const photo = photos.find((p) => p.id == id);

  return (
    <div>
      <h2>{photo.title}</h2>
    </div>
  );
};

export default PhotoDetailsPage;
