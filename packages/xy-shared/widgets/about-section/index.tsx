import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';

import { Section, Heading, Text, Button, cn } from '@xyflow/xy-ui';

type AboutSectionProps = {
  imageSrc?: string | StaticImageData;
  colorizeImage?: boolean;
};

function AboutSection({ imageSrc, colorizeImage = true }: AboutSectionProps) {
  return (
    <Section>
      <Heading size="sm" className="text-center mb-2">
        来自 xyflow 团队的项目
      </Heading>
      <Text className="text-center max-w-xl mx-auto mb-6" variant="light">
        我们是 Christopher、Peter、Abbey 和 Moritz。我们是 React Flow、Svelte Flow
        及其社区的维护者。
      </Text>

      <div className="flex flex-wrap justify-center space-x-8 mb-16">
        <Button asChild variant="link">
          <Link href="https://xyflow.com/blog" className="flex items-center">
            博客 <ArrowRightCircleIcon className="w-4 h-4 ml-1" />
          </Link>
        </Button>
        <Button asChild variant="link">
          <Link href="https://xyflow.com/about" className="flex items-center">
            关于我们 <ArrowRightCircleIcon className="w-4 h-4 ml-1" />
          </Link>
        </Button>
        <Button asChild variant="link">
          <Link href="https://xyflow.com/open-source" className="flex items-center">
            开源项目 <ArrowRightCircleIcon className="w-4 h-4 ml-1" />
          </Link>
        </Button>
        <Button asChild variant="link">
          <Link href="https://xyflow.com/contact" className="flex items-center">
            联系我们 <ArrowRightCircleIcon className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>

      {imageSrc && (
        <div
          className={cn('rounded-3xl overflow-hidden', {
            'bg-primary/40': colorizeImage,
          })}
        >
          <Image
            className="grayscale mix-blend-multiply"
            src={imageSrc}
            alt="xyflow 团队照片"
          />
        </div>
      )}
    </Section>
  );
}

export { AboutSection, type AboutSectionProps };
