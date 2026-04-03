import { MaskIcon } from './MaskIcon';
import type { CSSProperties } from 'react';

export type IconProps = { size?: number; className?: string; style?: CSSProperties };

export const TimelineIcon    = (p: IconProps) => <MaskIcon src="/assets/icons/book-open-svgrepo-com.svg"                          {...p} />;
export const ChevronDownIcon = (p: IconProps) => <MaskIcon src="/assets/icons/chevron-down-svgrepo-com.svg"                       {...p} />;
export const DownloadIcon    = (p: IconProps) => <MaskIcon src="/assets/icons/download-minimalistic-svgrepo-com.svg"               {...p} />;
export const EyeIcon         = (p: IconProps) => <MaskIcon src="/assets/icons/eye-svgrepo-com.svg"                                 {...p} />;
export const LocationIcon    = (p: IconProps) => <MaskIcon src="/assets/icons/location-pin-alt-1-svgrepo-com.svg"                  {...p} />;
export const GithubIcon      = (p: IconProps) => <MaskIcon src="/assets/icons/github-142-svgrepo-com.svg"                         {...p} />;
export const LinkedInIcon    = (p: IconProps) => <MaskIcon src="/assets/icons/linkedin-svgrepo-com.svg"                           {...p} />;
export const MailIcon        = (p: IconProps) => <MaskIcon src="/assets/icons/email-1573-svgrepo-com.svg"                         {...p} />;
export const MobileIcon      = (p: IconProps) => <MaskIcon src="/assets/icons/phone-225-svgrepo-com.svg"                          {...p} />;
export const GameIcon        = (p: IconProps) => <MaskIcon src="/assets/icons/gameboy-video-game-games-device-svgrepo-com.svg"    {...p} />;
export const DesignIcon      = (p: IconProps) => <MaskIcon src="/assets/icons/web-svgrepo-com.svg"                                {...p} />;
export const BackendIcon     = (p: IconProps) => <MaskIcon src="/assets/icons/server-svgrepo-com.svg"                             {...p} />;
