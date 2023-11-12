import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Stamp } from "@/components/stamp-like";
import { CommentDialog } from "@/components/comment";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import Modal from "../components/modal/Modal"
import { useRouter } from "next/navigation";

const imageLoader = ({ src, width, quality }) => {
  return `https://ar-io.dev/${src}?w=${width}&q=${quality || 75}`;
};
const audioLoader = ({ src, quality }) => {
  return `https://ar-io.dev/${src}?q=${quality || 75}`;
};
const videoLoader = ({ src, width, height, quality }) => {
  return `https://ar-io.dev/${src}?w=${width}&h=${height}&q=${quality || 75}`;
};
export function AssetCard(props) {
  const router=useRouter()
  const handleDonate = async () => {};
  const contentType = props.contentType;
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className={cn("text-md font-bold")}>{props.title}</CardTitle>
        <CardDescription> Creator Name : {props.creatorName}</CardDescription>
        <CardDescription> Creator Id : {props.creatorId}</CardDescription>
      </CardHeader>
      <CardContent>
        {contentType == "image" && (
          <Image
            src={props.id}
            alt={props.title}
            loader={imageLoader}
            className="aspect-[1/1] h-fit w-fit object-contain mx-auto"
            width={200}
            height={200}
          />
        )}
        {contentType == "audio" && (
          <audio style={{ width: "80%" }} controls>
            <source src={`https://ar-io.dev/${props.id}`} />
          </audio>
        )}
        {contentType == "video" && (
          <video controls>
            <source src={`https://ar-io.dev/${props.id}?w=200&h=200&q=75`} />
          </video>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-2 max-w-full">
          <div className="flex gap-4 max-w-full">
            <Stamp txId={props.id} />
            <CommentDialog txId={props.id} />
          </div>
          <p className="text-xs max-w-full">{props.description}</p>
          <div className="grid grid-cols-3 gap-2 max-w-full">
            {props.topics.map((topic, index) => (
              <Badge variant="outline" key={index} className="w-fit h-fit">
                {topic}
              </Badge>
            ))}
          </div>
          <Separator className="my-2" />
          <div className="grid gap-2 max-w-full">
            <Badge variant="outline" className="w-fit h-fit">
              License: {props.license[0]}
            </Badge>
            <Badge variant="outline" className="w-fit h-fit">
              Fee: {props.license[1]}
            </Badge>
          </div>
         
          <Modal name={props.creatorName} address={props.creatorId}/>
        </div>
      </CardFooter>
    </Card>
  );
}
