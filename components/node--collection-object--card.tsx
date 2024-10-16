import { DrupalNode } from "next-drupal"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import Link from "next/link"

import { MediaImage } from "components/media--image"
import { log } from "console"

interface NodeObjectCardProps {
  node: DrupalNode
}

export function NodeObjectCard({ node, ...props }: NodeObjectCardProps) { 
  const { t } = useTranslation()
  const router = useRouter();
  const { locale } = router;

  const getLocalizedPath = (path) => {
    if (locale === 'de') {
      return `/de${path}`;
    }
    return path;
  };

  return (
    <article
      className="relative flex w-80 lg:w-96 flex-col bg-transparent bg-clip-border text-gray-700 "
      {...props}
    >
      <div className="relative mx-0 mt-0 h-80 lg:h-96 overflow-hidden rounded-2xl bg-clip-border text-gray-700 shadow-lg">
        <MediaImage media={node.field_main_image} width={335} height={335} objectFit={"cover"} />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="flex-1 font-sans text-[22px] text-white">
            <Link href={getLocalizedPath(node.path.alias)} passHref legacyBehavior={true}>
              <a className="stretched-link ">
                {node.title}
              </a>
            </Link>
          </h2>
        </div>
        {/* <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id
          ultrices tincidunt, nunc nisl tincidunt urna, id aliquam mauris nunc id
        </p> */}
      </div>
    </article>
  )
}
