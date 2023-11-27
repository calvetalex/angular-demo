import { ApiEffects } from './api';
import { UiEffects } from './ui';
import { Effects as ResolverEffects } from './resolver.effects';

export const Effects = [...ApiEffects, ...UiEffects, ResolverEffects];
