"use client";

import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AA-Cat.jpg&psig=AOvVaw33wvfCljFeTlZXlLagYB8N&ust=1704264970809000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLCzvPOPvoMDFQAAAAAdAAAAABAJ/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Page() {
  return (
    <Image
      loader={imageLoader}
      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AA-Cat.jpg&psig=AOvVaw33wvfCljFeTlZXlLagYB8N&ust=1704264970809000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLCzvPOPvoMDFQAAAAAdAAAAABAJ"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
}
