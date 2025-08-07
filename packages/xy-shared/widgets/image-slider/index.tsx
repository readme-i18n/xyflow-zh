import type { ReactNode } from 'react';
import Link from 'next/link';
import { Button, Container, Heading, Text } from '@xyflow/xy-ui';

import { SliderItem } from './types';
import ImageSliderItems from './image-slider-items';

type ImageSliderProps = {
  kicker?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  buttonText?: ReactNode;
  buttonLink?: string;
  className?: string;
  items?: SliderItem[];
};

function ImageSlider({
  kicker = '项目展示',
  title = '被上千人使用',
  description = `
  从个人开源开发者到像 Stripe 和 Typeform 这样的公司，
  我们见证了这个库在数据处理工具、聊天机器人构建器、
  机器学习、音乐合成器等领域的广泛应用。
  `,
  buttonText = '查看所有项目',
  buttonLink = '/showcase',
  className,
  items = [],
}: ImageSliderProps) {
  return (
    <Container variant="dark" className={className}>
      <div className="p-4 md:p-8 lg:p-14">
        <div className="grid lg:grid-cols-2 lg:gap-40">
          <div>
            <Text className="font-bold mb-2 text-accent tracking-wide">{kicker}</Text>

            <Heading className="mb-4 tracking-normal">{title}</Heading>
          </div>
          <div>
            <Text className="mt-4 mb-4">{description}</Text>
            <Button asChild variant="secondary">
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8">
          {!!items.length && (
            <ImageSliderItems items={items} duration={5000} start={items[0].name} />
          )}
        </div>
      </div>
    </Container>
  );
}

export { ImageSlider, type ImageSliderProps };
