import { Card, CardBody, Image } from "@chakra-ui/react";

export function ProfileCard({
  imgUrl,
  name,
  characterName,
}: {
  imgUrl: string;
  name: string;
  characterName: string;
}) {
  return (
    <Card className="h-60 w-32" rounded={"md"}>
      <CardBody p={0} className="bg-black" rounded={"md"}>
        <Image
          src={`https://image.tmdb.org/t/p/original${imgUrl}`}
          alt="profile"
          className="w-32 h-40 rounded-t-md"
        />
        <p className="font-semibold text-sm mx-2 text-white">{name}</p>
        <p className="text-xs mx-2 text-white italic">{characterName}</p>
      </CardBody>
    </Card>
  );
}
