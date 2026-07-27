import type { ToolContent } from '../../data/types';
import { localsend } from './localsend';
import { obsStudio } from './obs-studio';

export const toolContents: Record<string, ToolContent> = {
  localsend,
  'obs-studio': obsStudio
};
