import React, { Suspense } from 'react';

// Helper function to get the icon component dynamically
const loadIcon = (iconName: string) => {
    return React.lazy(() =>
        import(`../../assets/icons/${iconName}`).then((module) => ({
            default: module.default,  // Access the default export
        }))
    );
};

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    size?: string | number;  // Add size prop
}

const SvgIcon = ({ name, size = 24, ...props }: SvgIconProps) => {
    const IconComponent = loadIcon(name);

    return (
        <Suspense fallback={<div>Loading icon...</div>}>
            <IconComponent width={size} height={size} {...props} />
        </Suspense>
    );
};

export default SvgIcon;
