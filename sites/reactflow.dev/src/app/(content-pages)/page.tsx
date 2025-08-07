import { FC } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SparklesIcon, BoltIcon } from '@heroicons/react/24/outline';
import { Button, Section, Stats } from '@xyflow/xy-ui';
import {
  BaseLayout,
  HeroFlow,
  ImageSlider,
  Features,
  GettingStarted,
  AboutSection,
  ProjectCards,
  FlowA,
  FlowB,
  FlowC,
} from 'xy-shared';
import { getLastChangelog } from 'xy-shared/server';
import { fetchGitHubNpmStats, InternalRoute } from '@/utils';
import ClientLogos from '@/components/client-logos';
import WhatsNewPreview from '@/components/whats-new-preview';

export const revalidate = 3600; // 60 * 60

export const metadata: Metadata = {
  title: 'React 中的节点式 UI',
  description:
    '高度可定制的 React 库，适用于工作流构建器、无代码应用、图像处理、可视化工具等。',
};

const features = [
  {
    title: '开箱即用',
    text: '你需要的功能都已经内置：拖动节点、缩放、平移、多选节点、添加/删除元素等。',
    route: '/learn' satisfies InternalRoute,
    linkLabel: '开始使用',
    flowComponent: <FlowA />,
  },
  {
    title: (
      <>
        由我们驱动。
        <br />
        由你设计。
      </>
    ),
    text: 'React Flow 的节点就是普通的 React 组件，适合用于交互式元素。完美兼容 Tailwind 和传统 CSS。',
    route: '/learn/customization/custom-nodes' satisfies InternalRoute,
    linkLabel: '自定义节点指南',
    flowComponent: <FlowB />,
  },
  {
    title: '丰富的内置插件',
    text: '使用 Background、Minimap、Controls、Panel、NodeToolbar 和 NodeResizer 组件构建更强大的应用。',
    route: '/learn/concepts/built-in-components' satisfies InternalRoute,
    flowComponent: <FlowC framework="react" />,
  },
];

const sliderItems = [
  {
    name: 'Stripe 文档',
    text: '用于流程文档的交互式节点图示',
    content: (
      <Image
        className="rounded-xl object-cover"
        src="/img/featured/stripe.png"
        alt="Stripe 文档"
        fill
      />
    ),
  },
  {
    name: 'DoubleLoop',
    text: '用于监控业务指标的节点式仪表板构建器',
    content: (
      <Image
        className="rounded-xl object-cover"
        src="/img/featured/doubleloop.png"
        alt="DoubleLoop"
        fill
      />
    ),
  },
  {
    name: 'TypeForm',
    text: '构建并可视化复杂问卷逻辑的交互式工具',
    content: (
      <Image
        className="rounded-xl object-cover"
        src="/img/featured/typeform.png"
        alt="TypeForm"
        fill
      />
    ),
  },
];

const Page: FC = async () => {
  const { stars = 23000, downloads = 4000 } = await fetchGitHubNpmStats();
  const pageMap = await getLastChangelog();
  const whatsNew = pageMap.slice(0, 3);

  return (
    <BaseLayout>
      <HeroFlow
        title="React Flow"
        initialColor="#ff0071"
        subtitle="一个可定制的 React 组件，用于构建节点式编辑器和交互式图表"
        action={
          <div className="flex">
            <Button size="lg" asChild className="mr-3 ">
              <Link href="/learn">
                <BoltIcon className="w-5 h-5 mr-1" />
                快速开始
              </Link>
            </Button>
            <Button size="lg" variant="pro" asChild>
              <Link href="/pro">
                <SparklesIcon className="w-5 h-5 mr-1" /> React Flow Pro
              </Link>
            </Button>
          </div>
        }
      />

      <Section className="mt-6 lg:mt-10 lg:px-10">
        <Stats
          stats={[
            { label: 'GitHub Star 数', value: `${(stars / 1000).toFixed(1)}K` },
            {
              label: '每周安装量',
              value: `${(downloads / 1000000).toFixed(2)}M`,
            },
            { label: '许可证', value: 'MIT' },
          ]}
          description="React Flow 是一个 MIT 协议的开源库。通过订阅 React Flow Pro，你可以支持我们的持续开发与维护。"
          link="/pro"
          linkLabel={
            <>
              <SparklesIcon className="w-5 h-5 mr-1" /> React Flow Pro
            </>
          }
        />
      </Section>

      <GettingStarted libraryName="React Flow" packageName="@xyflow/react" />

      <Section>
        <Features features={features} />
      </Section>

      <Section>
        <ClientLogos />
      </Section>

      <ImageSlider items={sliderItems} />

      <Section className="relative">
        <WhatsNewPreview items={whatsNew} variant="compact" />

        <div className="lg:hidden h-[50%] w-full bg-gradient-to-b from-transparent via-white/70 to-white absolute bottom-0 pointer-events-none" />
      </Section>

      <AboutSection />
      <ProjectCards projects={['svelteflow', 'xyflow']} />
    </BaseLayout>
  );
};

export default Page;
