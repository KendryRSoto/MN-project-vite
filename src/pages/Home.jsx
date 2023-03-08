import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";

export function Home() {
  const myImage = new CloudinaryImage("sample", {
    cloudName: "dstgujjlr",
  }).resize(fill().width(100).height(150));
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
}
