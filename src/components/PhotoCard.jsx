import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          alt={photo.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg object-cover"
        />
        <Chip className="absolute right-2 top-2">{photo.category}</Chip>
      </div>

      <div>
        {" "}
        <h2 className="font-medium text-lg">{photo.title}</h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <p>
            <AiOutlineLike />
          </p>
          <p>{photo.likes}</p>
        </div>
        <Separator orientation="vertical" />

        <div className="flex items-center gap-2">
          <p>
            <BiDownload />
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>
      <Button
        variant="outline"
        className="w-full hover:bg-linear-to-r from-pink-400 to-violet-400  "
      >
        View
      </Button>
    </Card>
  );
};

export default PhotoCard;
