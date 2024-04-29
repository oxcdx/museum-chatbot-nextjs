import Image, { ImageProps } from "next/image"

import { absoluteURL } from "lib/utils"
import { MediaProps } from "components/media"

import styled from "styled-components"

interface MediaImageProps extends MediaProps, Partial<ImageProps> {}

export function MediaImage({
  media,
  layout = "responsive",
  objectFit,
  width,
  height,
  priority,
  ...props
}: MediaImageProps) {
  const image = media?.field_media_image

  if (!image?.uri) {
    return null
  }

  const sizeProps =
    layout === "fill"
      ? null
      : {
          width: width || image.resourceIdObjMeta.width,
          height: height || image.resourceIdObjMeta.height,
        }

  return (
    <div className="media__content image__wrapper relative" {...props}>
      <Image
        src={absoluteURL(image.uri.url)}
        layout="responsive"
        objectFit={objectFit}
        alt={image.resourceIdObjMeta.alt || "Image"}
        title={image.resourceIdObjMeta.title}
        priority={priority}
        {...sizeProps} />
    </div>
  );
}

// create a styledimage component to replicate old behavior of next/image
export const StyledImage = styled(Image)`
`
