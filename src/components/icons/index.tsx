import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	faLinkedinIn,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
	faChevronDown,
	faDownload,
	faBookOpen,
	faGamepad,
	faGlobe,
	faLocationDot,
	faMobileScreenButton,
	faServer,
	faEnvelope,
	faEye,
} from '@fortawesome/free-solid-svg-icons';
import type { CSSProperties } from 'react';

export type IconProps = { size?: number; className?: string; style?: CSSProperties };

function renderIcon(icon: IconDefinition, { size = 20, className, style }: IconProps) {
	return (
		<FontAwesomeIcon
			icon={icon}
			className={className}
			fixedWidth
			style={{ fontSize: `${size}px`, ...style }}
		/>
	);
}

export function TimelineIcon(props: IconProps) {
	return renderIcon(faBookOpen, props);
}

export function ChevronDownIcon(props: IconProps) {
	return renderIcon(faChevronDown, props);
}

export function DownloadIcon(props: IconProps) {
	return renderIcon(faDownload, props);
}

export function EyeIcon(props: IconProps) {
	return renderIcon(faEye, props);
}

export function LocationIcon(props: IconProps) {
	return renderIcon(faLocationDot, props);
}

export function GithubIcon(props: IconProps) {
	return renderIcon(faGithub, props);
}

export function LinkedInIcon(props: IconProps) {
	return renderIcon(faLinkedinIn, props);
}

export function MailIcon(props: IconProps) {
	return renderIcon(faEnvelope, props);
}

export function MobileIcon(props: IconProps) {
	return renderIcon(faMobileScreenButton, props);
}

export function GameIcon(props: IconProps) {
	return renderIcon(faGamepad, props);
}

export function DesignIcon(props: IconProps) {
	return renderIcon(faGlobe, props);
}

export function BackendIcon(props: IconProps) {
	return renderIcon(faServer, props);
}

export const FrontendIcon = DesignIcon;
export const ToolingIcon = GithubIcon;
export const SoftSkillsIcon = TimelineIcon;
