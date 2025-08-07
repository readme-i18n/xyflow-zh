import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { ContentGrid, ContentGridItem, Text, Heading, Logo, cn } from '@xyflow/xy-ui';

const projectsData = {
  reactflow: {
    title: 'React Flow',
    description: '一个可定制的 React 组件，用于构建节点式编辑器和交互式图表',
    route: 'https://reactflow.dev',
    className: 'text-[#ff0071]',
  },
  svelteflow: {
    title: 'Svelte Flow',
    description: '一个可定制的 Svelte 组件，用于构建节点式编辑器和交互式图表',
    route: 'https://svelteflow.dev',
    className: 'text-[#ff4000]',
  },
  xyflow: {
    title: 'xyflow',
    description:
      '我们是 React Flow 和 Svelte Flow 背后的团队。欢迎阅读我们的更新和博客文章，了解我们对开源开发的理念。',
    route: 'https://xyflow.com',
    className: 'text-[#000]',
  },
};

type ProjectCardsProps = {
  projects?: (keyof typeof projectsData)[];
};

function ProjectCards({ projects }: ProjectCardsProps) {
  if (!projects) {
    return null;
  }

  return (
    <ContentGrid className="mt-16 lg:mt-24">
      {projects.map((projectId) => {
        const project = projectsData[projectId];

        return (
          <ContentGridItem key={projectId} route={project.route}>
            <Heading size="sm" className="flex items-center">
              <Logo className={cn('mr-2', project.className)} /> {project.title}
            </Heading>
            <Text className="mt-2 mb-4" variant="light">
              {project.description}
            </Text>
            <span className={cn('flex items-center', project.className)}>
              访问网站 <ArrowRightCircleIcon className="ml-1 w-4 h-4" />
            </span>
          </ContentGridItem>
        );
      })}
    </ContentGrid>
  );
}

export { ProjectCards, type ProjectCardsProps };
